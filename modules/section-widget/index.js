export default {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Section Widget',
  },
  fields: {
    add: {
      title: {
        type: "string",
        label: "Title",
        required: true,
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
                  tag: "h2",
                  label: "Heading 2 (H2)",
                }, {
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
            "file": {},
            "impressum": {}
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
