import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.PUBLIC_SITE_URL || "https://nixwud.com";
const sitemapExcludedPrefixes = ["/blog/", "/topics/"];
const sitemapExcludedPaths = new Set(["/search/", "/privacy-policy/", "/terms/"]);

export default defineConfig({
  site,
  output: "static",
  integrations: [sitemap({
    filter: (page) => {
      const pathname = new URL(page).pathname;
      return !sitemapExcludedPaths.has(pathname) && !sitemapExcludedPrefixes.some((prefix) => pathname.startsWith(prefix));
    }
  })],
  redirects: {
    "/free-resources": "/resources",
    "/downloads": "/resources"
  }
});
