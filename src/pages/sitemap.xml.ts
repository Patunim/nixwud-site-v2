import type { APIRoute } from "astro";
import { client } from "../lib/sanity";

export const GET: APIRoute = async () => {
  const base = "https://nixwud.com";

  const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current, _updatedAt }`);
  const authors = await client.fetch(`*[_type == "author"]{ "slug": slug.current }`);
  const topics = await client.fetch(`*[_type == "topic"]{ "slug": slug.current }`);

  const urls = [
    `${base}`,
    `${base}/blog`,
    ...posts.map(p => `${base}/blog/${p.slug}`),
    ...authors.map(a => `${base}/authors/${a.slug}`),
    ...topics.map(t => `${base}/topics/${t.slug}`)
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `
  <url>
    <loc>${url}</loc>
  </url>`).join("")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
};