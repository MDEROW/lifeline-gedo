import { defineField, defineType } from "sanity";

export const program = defineType({
  name: "program",
  title: "Program",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "icon", title: "Emoji Icon", type: "string" }),
    defineField({ name: "description", title: "Short Description", type: "text", rows: 3 }),
    defineField({ name: "body", title: "Full Content", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "activities", title: "Key Activities", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
});
