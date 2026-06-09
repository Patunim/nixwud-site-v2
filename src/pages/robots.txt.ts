import { SITE_URL } from "../lib/siteConfig";

export async function GET() {

  const robots = `
User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap-index.xml

# AI + crawler controls

User-agent: GPTBot
Allow: /

User-agent: Google-Extended
Disallow: /

User-agent: ClaudeBot
Allow: /

User-agent: CCBot
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: Amazonbot
Disallow: /

User-agent: meta-externalagent
Disallow: /
`;

  return new Response(robots.trim(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}