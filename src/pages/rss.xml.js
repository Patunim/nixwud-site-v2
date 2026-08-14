import rss from "@astrojs/rss";
import { safeFetch } from "../lib/sanity.js";

export async function GET(context) {
  const posts = await safeFetch(`*[_type == "post" && defined(slug.current) && editorialStatus == "published"] | order(publishedAt desc){title, excerpt, publishedAt, "slug": slug.current}`, {}, []);
  return rss({
    title: "Nixwud Consultancy Insights",
    description: "Practical thinking for better business and technology decisions.",
    site: context.site,
    items: posts.map((post) => ({ title: post.title, description: post.excerpt || "", pubDate: new Date(post.publishedAt || Date.now()), link: `/insights/${post.slug}/` }))
  });
}
