export default {
  options: {
    label: "Home Page",
  },
  fields: {
    add: {
      title: {
        type: "string",
        label: "Title",
        required: true,
      },
      text: {
        type: "string",
        label: "Text",
        required: true,
      },
      heroButtonLabel: {
        type: "string",
        label: "Button Label",
      },
      _appImageBase: {
        type: "relationship",
        label: "Application Image (Bottom Layer)",
        max: 1,
        withType: "@apostrophecms/image",
      },
      _appImageMiddle: {
        type: "relationship",
        label: "Application Image (Middle Layer)",
        max: 1,
        withType: "@apostrophecms/image",
      },
      _appImageTop: {
        type: "relationship",
        label: "Application Image (Top Layer)",
        max: 1,
        withType: "@apostrophecms/image",
      },
      main: {
        type: "area",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              toolbar: [
                "styles",
                "|",
                "bold",
                "italic",
                "strike",
                "link",
                "|",
                "bulletList",
                "orderedList",
                "|",
                "table",
                "image",
              ],
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (P)",
                },
                {
                  tag: "h3",
                  label: "Heading 3 (H3)",
                },
                {
                  tag: "h4",
                  label: "Heading 4 (H4)",
                },
              ],
              insert: ["table", "importTable", "image"],
            },
            "@apostrophecms/image": {},
            "@apostrophecms/video": {},
            button: {
              label: "Button Widget",
              options: {
                className: "bp-button-widget",
              },
            },
            projects: {},
            "two-column": {},
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
