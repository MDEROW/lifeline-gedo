import { defineField, defineType } from "sanity";

export const partner = defineType({
  name: "partner",
  title: "Partner / Donor",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Organization Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "logo", title: "Logo", type: "image" }),
    defineField({ name: "website", title: "Website URL", type: "url" }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  preview: {
    select: { title: "name", media: "logo" },
  },
});
