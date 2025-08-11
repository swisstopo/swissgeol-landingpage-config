export default {
  extend: "@apostrophecms/page-type",
  options: {
    label: "Default Page",
  },
  fields: {
    add: {
      description: {
        type: "string",
        label: "Description",
        required: false,
      },
      main: {
        type: "area",
        options: {
          widgets: {
            "section": {}
          },
        },
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: ["title", "main"],
      },
    },
  },
};
