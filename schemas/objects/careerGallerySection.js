export default {
  title: "Life At Money Tick Section",
  type: "object",
  name: "carrers_gallery_section",
  fields: [
    {
      name: "carrers_gallery_title_highlighted",
      title: "Careers Gallery Title Highligted",
      type: "string",
    },

    {
      type: "text",
      name: "carrers_gallery_desc",
      title: "Careers Gallery Description",
    },
    {
      type: "array",
      name: "carrers_desc",
      title: "Careers Header Description",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      type: "image",
      name: "carrers_header_image",
      title: "Careers Header Image",
    },
    {
      type: "image",
      name: "carrers_header_bg_image",
      title: "Careers Header Background Image",
    },
    {
      type: "array",
      name: "CareersGalleryFields",
      title: "Careers Gallery Fields",
      of: [{ type: "careers_gallery_fields_section" }],
    },
  ],
};
