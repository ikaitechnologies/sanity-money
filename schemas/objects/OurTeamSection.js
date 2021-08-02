export default {
    title: "Our Team Section",
    type: "object",
    name: "OurTeamSection",
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
        type: "string",
        name: "Description",
        title: "Description",
      },
      {
        type: "array",
        name: "OurTeamSection",
        title: "Our Team Section",
        of: [{ type: "ourTeamProfile" }],
      },
    ],
  };
  