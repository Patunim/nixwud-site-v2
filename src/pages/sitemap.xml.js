import { client } from "../lib/sanity";
import { SITE_URL } from "../lib/siteConfig";

export async function GET() {

  const posts = await client.fetch(`
    *[_type == "post"]{
      slug,
      updatedAt,
      publishedAt
    }
  `);

  const categories = await client.fetch(`
    *[_type == "category"]{
      slug
    }
  `);

  const staticPages = [

    {
      url: SITE_URL,
      lastmod: new Date().toISOString(),
    },

    {
      url: `${SITE_URL}/blog`,
      lastmod: new Date().toISOString(),
    },

  ];

  const postPages = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug.current}`,
    lastmod:
      post.updatedAt ||
      post.publishedAt,
  }));

  const topicPages = categories.map((category) => ({
    url: `${SITE_URL}/topics/${category.slug.current}`,
    lastmod: new Date().toISOString(),
  }));

  const allPages = [
    ...staticPages,
    ...postPages,
    ...topicPages,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>

<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>

${allPages.map((page) => `

  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
  </url>

`).join("")}

</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}