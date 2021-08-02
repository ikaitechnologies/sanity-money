export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "meta_title",
      type: "string",
      title: "Meta Title",
    },
    {
      name: "meta_desc",
      type: "text",
      title: "Meta description",
    },
    {
      name: "pagebuildersection",
      title: "Add content",
      type: "array",
      of: [
        { type: "common_btn" },
        { type: "home_landing_section" },
        { type: "LeftTitleRightDesc" },
        { type: "CounterSection" },
        { type: "serviceTypeSection" },
        { type: "testimonials" },
        { type: "TextWithCardSection" },
        { type: "BestRewardSection" },
        { type: "OurTeamSection" },
        { type: "FinacialToolSection" },
        { type: "OurPartnerSection" },
      ],
    },
  ],
};
