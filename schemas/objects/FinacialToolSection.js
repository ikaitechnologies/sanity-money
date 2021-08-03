export default {
  title: "Finacial Tool Section",
  type: "object",
  name: "FinacialToolSection",
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
      type: "image",
      name: "HomeFinacialbgImage",
      title: "Background Image",
    },
    {
      type: "array",
      name: "FinacialToolSection",
      title: "Finacial Tool Section",
      of: [{ type: "homeFinancialTool" }],
    },
  ],
};
