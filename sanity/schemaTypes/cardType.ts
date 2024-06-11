import { defineField, defineType } from "sanity";

export const cardType = defineType({
  name: "card",
  title: "Card",
  type: "document",
  fields: [
    defineField({
      name: "type",
      type: "string",
      options: {
        list: [
          {
            title: "Chrome Extension",
            value: "chrome-extension",
          },
          {
            title: "Website",
            value: "website",
          },
          {
            title: "Article",
            value: "article",
          },
        ],
      },
    }),
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
    defineField({
      title: "Is Featured",
      name: "isFeatured",
      type: "boolean",
    }),
  ],
});
