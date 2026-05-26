import slugify from "slugify";

export function extractHeadings(blocks = []) {

  return blocks
    .filter(
      (block) =>
        block._type === "block" &&
        ["h2", "h3"].includes(block.style)
    )
    .map((block) => {

      const text = block.children
        ?.map((child) => child.text)
        .join("");

      return {
        text,
        level: block.style,
        slug: slugify(text, {
          lower: true,
          strict: true
        })
      };
    });
}