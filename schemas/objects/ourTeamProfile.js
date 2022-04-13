export default {
    type: "object",
    name: "ourTeamProfile",
    title: "our Team Profile ",
    fields: [
      {
        type: "image",
        name: "ourTeamProfileicon",
        title: "our Team Profile Icon",
        options: {
          hotspot: true // <-- Defaults to false
        },
      },
      {
        type: "string",
        name: "ourTeamProfilealtimage",
        title: "our Team Profile Alt Image",
      },
      {
        type: "string",
        name: "TitleName",
        title: "Title",
      },
      {
        type: "string",
        name: "ourTeamProfilepost",
        title: "our Team Profile Post",
      },
      {
        type: "text",
        name: "individual_taught",
        title: "Individual Taught",
      },
      {
        type: "text",
        name: "short_desc",
        title: "Short description of that person",
      },
      {
        type: "social_menu_section",
        name: "social_menu",
        title: "Social Menu",
      },
    ],
  };