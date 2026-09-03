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
    "/work": "/case-studies",
    "/services/digital-platforms": "/services/web-design-development",
    "/services/strategy-business-analysis": "/services/web-design-development",
    "/services/ai-crm-business-automation": "/services/crm-automation",
    "/services/ai-automation": "/services/crm-automation",
    "/services/growth-discoverability": "/services/seo-discoverability",
    "/free-resources": "/resources",
    "/downloads": "/resources"
  }
});
