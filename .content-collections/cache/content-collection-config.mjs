// content-collections.ts
import { z } from "zod";
import { defineCollection, defineConfig } from "@content-collections/core";
import matter from "gray-matter";
function extractFrontMatter(content) {
  const { data, content: body, excerpt } = matter(content, { excerpt: true });
  return { data, body, excerpt: excerpt || "" };
}
var posts = defineCollection({
  name: "posts",
  directory: "./src/articles",
  include: "*.md",
  schema: z.object({
    title: z.string(),
    published: z.string().date(),
    description: z.string().optional(),
    authors: z.array(z.string()),
    content: z.string()
  }),
  transform: ({ content, ...post }) => {
    const frontMatter = extractFrontMatter(content);
    const headerImageMatch = content.match(/!\[([^\]]*)\]\(([^)]+)\)/);
    const headerImage = headerImageMatch ? headerImageMatch[2] : void 0;
    return {
      ...post,
      slug: post._meta.path,
      excerpt: frontMatter.excerpt,
      description: post.description,
      headerImage,
      content: frontMatter.body
    };
  }
});
var content_collections_default = defineConfig({
  content: [posts]
});
export {
  content_collections_default as default
};
