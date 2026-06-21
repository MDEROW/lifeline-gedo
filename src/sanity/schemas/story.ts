import { defineField, defineType } from "sanity";

export const story = defineType({
  name: "story",
  title: "Beneficiary Story",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name (first name + initial)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "program", title: "Program", type: "string" }),
    defineField({ name: "quote", title: "Quote", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true } }),
  ],
  preview: {
    select: { title: "name", subtitle: "location", media: "photo" },
  },
});
