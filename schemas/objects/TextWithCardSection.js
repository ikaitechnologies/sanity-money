export default {
  title: "Text With Card Section",
  type: "object",
  name: "TextWithCardSection",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title",
    },
    {
      type: "string",
      name: "titlehightlighted",
      title: "Title Highlighted",
    },
    {
      type: "text",
      name: "Description",
      title: "Description",
    },
    {
      type: "array",
      name: "TextWithCardSection",
      title: "Text with Card Section",
      of: [{ type: "homeTextWithCard" }],
    },
  ],
};
