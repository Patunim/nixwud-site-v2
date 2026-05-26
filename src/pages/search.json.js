import { client } from "../lib/sanity";

export async function GET() {

  const posts = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc){

      title,
      slug,
      excerpt

    }
  `);

  return new Response(
    JSON.stringify(posts),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}