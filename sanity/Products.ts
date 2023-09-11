import { defineField, defineType } from "sanity"; // to let us know the fields available to be used in schema

export default defineType({
  name: "products",
  type: "document",
  title: "Products",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        slugify: (input: any) => input
        .toLowerCase()
        .slice(0, 199)
      }
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
    }),
    defineField({
      name: "description",
      type: "string",
      title: "Description",
    }),
    defineField({
      name: "price",
      type: "string",
      title: "Price",
    }),
    defineField({
      name: "category",
      type: "string",
      title: "Category",
      options: {
        list: [
          { title: "Men", value: "men" },     //value will be used to fetch filtered data
          { title: "Women", value: "women" },
          { title: "Kids", value: "kids" },
        ],
      },
    }),
  ],
});

