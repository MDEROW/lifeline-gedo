import { defineField, defineType } from "sanity";

export const stat = defineType({
  name: "stat",
  title: "Impact Statistic",
  type: "document",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (r) => r.required() }),
    defineField({ name: "value", title: "Numeric Value", type: "number", validation: (r) => r.required() }),
    defineField({ name: "suffix", title: "Suffix (e.g. + or %)", type: "string" }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  preview: {
    select: { title: "label", subtitle: "value" },
  },
});
