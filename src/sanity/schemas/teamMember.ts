import { defineField, defineType } from "sanity";

export const teamMember = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Full Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "title", title: "Job Title", type: "string" }),
    defineField({ name: "bio", title: "Biography", type: "text", rows: 4 }),
    defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  preview: {
    select: { title: "name", subtitle: "title", media: "photo" },
  },
});
