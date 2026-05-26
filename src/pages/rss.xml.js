import rss from "@astrojs/rss";

import { client } from "../lib/sanity";

export async function GET(context) {

  const posts = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc){

      title,
      slug,
      excerpt,
      publishedAt

    }
  `);

  const validPosts = posts.filter((post) =>
    post.title &&
    post.slug?.current
  );

  return rss({

    title: "Nixwud",

    description:
      "Modern digital infrastructure and strategic insights.",

    site: context.site,

    items: validPosts.map((post) => ({

      title: post.title,

      description:
        post.excerpt ||
        "Read this article on Nixwud.",

      pubDate: post.publishedAt
        ? new Date(post.publishedAt)
        : new Date(),

      link: `/blog/${post.slug.current}`

    }))

  });
}