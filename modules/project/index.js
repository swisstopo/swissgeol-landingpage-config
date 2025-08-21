export default {
  extend: "@apostrophecms/piece-type",
  options: {
    label: "Project",
  },
  fields: {
    add: {
      image: {
        label: "Logo Image",
        type: "area",
        help: "This is the logo. Its displayed height is 58px.",
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/image": {},
          },
        },
      },
      backgroundColor: {
        type: "select",
        label: "Background Color Class",
        choices: [
          {
            label: "Blue (Assets)",
            value: "blue",
          },
          {
            label: "Green (Viewer)",
            value: "green",
          },
          {
            label: "Red (Boreholes)",
            value: "red",
          },
          {
            label: "Orange (Raw MAterials",
            value: "orange",
          },
        ],
      },
      mainUrl: {
        type: "url",
        label: "Project URL",
        required: true,
      },
      additionalUrls: {
        type: "array",
        label: "Additional URLs",
        fields: {
          add: {
            label: {
              type: "string",
              label: "Label",
            },
            url: {
              type: "url",
              label: "URL",
            },
          },
        },
      },
      descriptionItems: {
        type: "array",
        label: "Description Items",
        titleField: "text",
        max: 3,
        fields: {
          add: {
            label: {
              type: "string",
              label: "Text",
            },
          },
        },
      },
    },
  },
};
