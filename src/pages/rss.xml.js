import rss from "@astrojs/rss";
import { safeFetch, toValidDate } from "../lib/sanity.js";

export async function GET(context) {
  const posts = await safeFetch(`*[_type == "post" && !(_id in path("drafts.**")) && defined(title) && defined(slug.current)] | order(publishedAt desc){title, excerpt, publishedAt, "slug": slug.current}`, {}, []);
  return rss({
    title: "Nixwud Consultancy Insights",
    description: "Practical thinking for better business and technology decisions.",
    site: context.site,
    items: posts.map((post) => ({ title: post.title, description: post.excerpt || "", pubDate: toValidDate(post.publishedAt) || new Date(), link: `/insights/${post.slug}/` }))
  });
}
