export default {
  title: "Counter Section",
  type: "object",
  name: "CounterSection",
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
      type: "array",
      name: "Counter",
      title: "Counter Type",
      of: [{ type: "userCounter" }],
    },
  ],
};