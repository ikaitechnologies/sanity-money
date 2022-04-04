export default {
  title: "Careers Gallery Fields Section",
  type: "object",
  name: "careers_gallery_fields_section",
  fields: [
    {
      name: "carrers_gallery_title",
      title: "Careers Gallery Title",
      type: "string",
    },
    {
      type: "array",
      name: "CareersGalleryImagesFields",
      title: "Careers Gallery Images Fields",
      of: [{ type: "careers_gallery_images" }],
    },
  ],
};
