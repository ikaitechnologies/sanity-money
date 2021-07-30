export default {
  title: "Counter Section",
  type: "object",
  name: "CounterSection",
  fields: [
    {
      type: "array",
      name: "Counter",
      title: "Counter Type",
      of: [
        { type: "userCounter" },

        
      ],
    },
    // {
    //   type: "userCounter",
    //   name: "Counter2",
    //   title: "Relationship",
    // },
    // {
    //   type: "userCounter",
    //   name: "Counter3",
    //   title: "BANK",
    // },
    // {
    //   type: "userCounter",
    //   name: "Counter4",
    //   title: "Counter Busniess Conduct",
    // },
  ],
};
