export default {
  name: "serviceTypeSection",
  type: "object",
  title: "Service Type Section",
  fields: [
    {
      name: "serviceTypeData",
      type: "array",
      title: "Service Type Data",
      of: [
        {
          type: "serviceTypeInputs",
        },
      ],
    },
  ],
};
