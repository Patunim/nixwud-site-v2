import { access, readFile, readdir } from "node:fs/promises";
import { constants } from "node:fs";
import { dirname, extname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const distRoot = join(projectRoot, "dist");
const errors = [];
const warnings = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory() ? walk(path) : [path];
    })
  );
  return files.flat();
}

async function exists(path) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

function reportError(file, message) {
  errors.push(`${relative(distRoot, file)}: ${message}`);
}

function reportWarning(file, message) {
  warnings.push(`${relative(distRoot, file)}: ${message}`);
}

const files = await walk(distRoot);
const htmlFiles = files.filter((file) => extname(file) === ".html");
const titlesMap = new Map();
const canonicalMap = new Map();

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const isRedirect = /<meta[^>]+http-equiv=["']refresh["']/i.test(html);
  const isNoindex = /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html);

  // Check for forbidden em dash (—) and en dash (–)
  if (html.includes("—")) {
    reportError(file, "contains forbidden em dash character (—)");
  }
  if (html.includes("–")) {
    reportError(file, "contains forbidden en dash character (–)");
  }

  if (!isRedirect) {
    // 1. Page Title
    const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
    if (!titleMatch || !titleMatch[1].trim()) {
      reportError(file, "missing or empty <title>");
    } else {
      const titleText = titleMatch[1].trim();
      if (titlesMap.has(titleText)) {
        reportWarning(file, `duplicate <title>: "${titleText}" (also in ${titlesMap.get(titleText)})`);
      } else {
        titlesMap.set(titleText, relative(distRoot, file));
      }
    }

    // 2. Meta Description
    const metaDescMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i);
    if (!metaDescMatch || !metaDescMatch[1].trim()) {
      if (!isNoindex) {
        reportError(file, "missing or empty meta description on indexable page");
      }
    }

    // 3. Canonical URL
    const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
    if (!canonicalMatch || !/^https?:\/\//i.test(canonicalMatch[1])) {
      reportError(file, "missing absolute canonical URL");
    } else {
      const canonicalUrl = canonicalMatch[1];
      if (canonicalMap.has(canonicalUrl)) {
        reportWarning(file, `duplicate canonical URL: "${canonicalUrl}" (also in ${canonicalMap.get(canonicalUrl)})`);
      } else {
        canonicalMap.set(canonicalUrl, relative(distRoot, file));
      }
    }

    // 4. H1 Structure
    const h1Matches = html.match(/<h1(?:\s|>)/gi) || [];
    if (h1Matches.length === 0) {
      reportError(file, "missing <h1> heading");
    } else if (h1Matches.length > 1) {
      reportError(file, `found ${h1Matches.length} <h1> headings, expected exactly 1`);
    }

    // 5. Open Graph & Twitter Cards
    if (!/<meta[^>]+property=["']og:title["']/i.test(html)) reportError(file, "missing og:title");
    if (!/<meta[^>]+property=["']og:description["']/i.test(html)) reportError(file, "missing og:description");
    if (!/<meta[^>]+property=["']og:url["']/i.test(html)) reportError(file, "missing og:url");
    if (!/<meta[^>]+property=["']og:image["']/i.test(html)) reportError(file, "missing og:image");
    if (!/<meta[^>]+name=["']twitter:card["']/i.test(html)) reportError(file, "missing twitter:card");

    // 6. Structured Data (JSON-LD) Validation
    const jsonLdBlocks = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
    if (jsonLdBlocks.length === 0 && !isNoindex) {
      reportWarning(file, "no application/ld+json structured data found");
    }
    for (const block of jsonLdBlocks) {
      try {
        const parsed = JSON.parse(block[1]);
        if (!parsed["@context"] || !parsed["@type"]) {
          reportError(file, "structured data JSON-LD missing @context or @type");
        }
      } catch (err) {
        reportError(file, `malformed JSON-LD structured data: ${err.message}`);
      }
    }

    // 7. Image Alt Attributes
    for (const imgMatch of html.matchAll(/<img\b[^>]*>/gi)) {
      if (!/\salt=["'][^"']*["']/i.test(imgMatch[0])) {
        reportError(file, `image missing alt attribute: ${imgMatch[0].slice(0, 50)}...`);
      }
    }
  }

  // 8. Internal Reference Resolution
  for (const match of html.matchAll(/\s(?:href|src)=["'](\/[^"'#?]*)/gi)) {
    let urlPath;
    try {
      urlPath = decodeURIComponent(match[1]).replace(/^\/+/, "");
    } catch {
      reportError(file, `malformed internal reference: ${match[1]}`);
      continue;
    }
    const directPath = resolve(distRoot, urlPath);
    const indexPath = resolve(distRoot, urlPath.replace(/\/$/, ""), "index.html");
    if (![directPath, indexPath].every((p) => p === distRoot || p.startsWith(`${distRoot}${sep}`))) {
      reportError(file, `internal reference escapes site root: ${match[1]}`);
      continue;
    }
    if (!(await exists(directPath)) && !(await exists(indexPath))) {
      reportError(file, `broken internal link/asset: ${match[1]}`);
    }
  }
}

// 9. Robots.txt and Sitemap Validation
const robotsPath = join(distRoot, "robots.txt");
if (!(await exists(robotsPath))) {
  reportError(robotsPath, "missing robots.txt in build output");
} else {
  const robots = await readFile(robotsPath, "utf8");
  if (!/^Sitemap:\s+https?:\/\//im.test(robots)) {
    reportError(robotsPath, "robots.txt missing Sitemap reference");
  }
}

const sitemapFiles = files.filter((f) => /sitemap(-\d+)?\.xml$/.test(f));
if (sitemapFiles.length === 0) {
  reportError(distRoot, "missing XML sitemap in build output");
}

if (warnings.length) {
  console.warn(`SEO Validation Warnings (${warnings.length}):\n- ${warnings.join("\n- ")}`);
}

if (errors.length) {
  console.error(`\nSEO Validation Failed with ${errors.length} error(s):\n- ${errors.join("\n- ")}`);
  process.exit(1);
}

console.log(`\nSEO Validation Passed: ${htmlFiles.length} HTML pages and structured assets verified.`);
