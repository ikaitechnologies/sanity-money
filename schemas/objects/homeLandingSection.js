export default {
  title: "Home Landing Section",
  type: "object",
  name: "home_landing_section",
  fields: [
    {
      name: "home_landing_title_highlighted",
      title: "Home Landing Title Highligted",
      type: "string",
    },
    {
      name: "home_landing_title",
      title: "Home Landing Title",
      type: "string",
    },

    {
      type: "text",
      name: "home_landing_desc",
      title: "Home Landing Description",
    },
    {
      title: "Display Image",
      name: "home_landing_image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Home Landing Display Image",
    },
  ],
};
