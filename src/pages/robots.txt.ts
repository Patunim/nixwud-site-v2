import { SITE_URL } from "../lib/siteConfig";

export async function GET() {

  const robots = `
User-agent: *

Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

  return new Response(robots.trim(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}