import { access, readFile, readdir } from "node:fs/promises";
import { constants } from "node:fs";
import { dirname, extname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const distRoot = join(projectRoot, "dist");
const errors = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  }));
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

function report(file, message) {
  errors.push(`${relative(distRoot, file)}: ${message}`);
}

const files = await walk(distRoot);
const htmlFiles = files.filter((file) => extname(file) === ".html");

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const isRedirect = /<meta[^>]+http-equiv=["']refresh["']/i.test(html);

  if (!isRedirect) {
    if (!/<title>[^<]+<\/title>/i.test(html)) report(file, "missing page title");
    if (!/<meta[^>]+name=["']description["'][^>]+content=["'][^"']+["']/i.test(html)) report(file, "missing meta description");
    if (!/<link[^>]+rel=["']canonical["'][^>]+href=["']https?:\/\//i.test(html)) report(file, "missing absolute canonical URL");

    const h1Count = (html.match(/<h1(?:\s|>)/gi) || []).length;
    if (h1Count !== 1) report(file, `expected one H1, found ${h1Count}`);

    const ids = [...html.matchAll(/\sid=["']([^"']+)["']/gi)].map((match) => match[1]);
    const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
    if (duplicateIds.length) report(file, `duplicate IDs: ${duplicateIds.join(", ")}`);

    for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
      if (!/\salt=["'][^"']*["']/i.test(match[0])) report(file, "image missing alt attribute");
    }
  }

  for (const match of html.matchAll(/\s(?:href|src)=["'](\/[^"'#?]*)/gi)) {
    let urlPath;
    try {
      urlPath = decodeURIComponent(match[1]).replace(/^\/+/, "");
    } catch {
      report(file, `malformed internal reference: ${match[1]}`);
      continue;
    }
    const directPath = resolve(distRoot, urlPath);
    const indexPath = resolve(distRoot, urlPath.replace(/\/$/, ""), "index.html");
    if (![directPath, indexPath].every((path) => path === distRoot || path.startsWith(`${distRoot}${sep}`))) {
      report(file, `internal reference escapes the site root: ${match[1]}`);
      continue;
    }
    if (!(await exists(directPath)) && !(await exists(indexPath))) report(file, `broken internal reference: ${match[1]}`);
  }
}

const homepage = await readFile(join(distRoot, "index.html"), "utf8");
if (!/googletagmanager\.com\/gtag\/js\?id=G-[A-Z0-9]+/i.test(homepage)) {
  report(join(distRoot, "index.html"), "GA4 tag is missing or malformed");
}

const robots = await readFile(join(distRoot, "robots.txt"), "utf8");
if (!/^Sitemap:\s+https?:\/\//im.test(robots)) report(join(distRoot, "robots.txt"), "absolute sitemap URL is missing");

const sitemapFiles = files.filter((file) => /sitemap-\d+\.xml$/.test(file));
const sitemap = (await Promise.all(sitemapFiles.map((file) => readFile(file, "utf8")))).join("\n");
for (const excluded of ["/blog/", "/topics/", "/search/", "/privacy-policy/", "/terms/"]) {
  if (sitemap.includes(excluded)) report(sitemapFiles[0] || distRoot, `excluded route appears in sitemap: ${excluded}`);
}

if (errors.length) {
  console.error(`Built-site validation failed:\n- ${errors.join("\n- ")}`);
  process.exit(1);
}

console.log(`Built-site validation passed (${htmlFiles.length} HTML pages checked).`);
