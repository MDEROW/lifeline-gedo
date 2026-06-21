import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "News Post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "publishedAt", title: "Published Date", type: "datetime" }),
    defineField({ name: "tag", title: "Category Tag", type: "string" }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3 }),
    defineField({ name: "mainImage", title: "Main Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "body", title: "Body", type: "array", of: [{ type: "block" }, { type: "image" }] }),
  ],
  preview: {
    select: { title: "title", subtitle: "publishedAt", media: "mainImage" },
  },
});
