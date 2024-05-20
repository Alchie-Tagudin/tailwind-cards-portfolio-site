import { defineField, defineType } from "sanity";

export const cardType = defineType({
  name: "card",
  title: "Card",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "string",
    }),
    defineField({
      name: "url",
      type: "string",
    }),
    defineField({
      name: "imageUrl",
      type: "string",
    }),
    defineField({
      name: "hashtags",
      type: "string",
    }),
    defineField({
      name: "repoUrl",
      type: "string",
    }),
  ],
});
