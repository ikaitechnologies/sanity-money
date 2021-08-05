export default {
  title: "Bussiness Loan Landing Section",
  type: "object",
  name: "bussiness_loan_landing_section",
  fields: [
    {
      name: "bussiness_loan_landing_title_highlighted",
      title: "Bussiness Loan Landing Title Highligted",
      type: "string",
    },
    {
      name: "bussinessloan_landing_title",
      title: "Bussiness Laon Landing Title",
      type: "string",
    },
    {
      type: "text",
      name: "bussiness_loan_landing_desc",
      title: "bussiness_loan Landing Description",
    },
    {
      type: "boolean",
      name: "bussiness_loan_landing_rotate_image",
      title: "bussiness_loan Landing Rotate Image",
    },
    {
      title: "Display Image",
      name: "bussiness_loan_landing_image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Bussiness Loan Landing Display Image",
    },
    
  ],
};
