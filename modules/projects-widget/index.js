// modules/projects-widget/index.js
export default {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Projects Widget",
  },
  fields: {
    add: {
      _selectedProject: {
        type: "relationship",
        label: "Selected Project",
        withType: "project",
        max: 1,
        required: true,
      },
      _images: {
        type: "relationship",
        label: "Selected File",
        withType: "@apostrophecms/image",
        required: false,
        max: 2,
        min: 1,
      },
    },
  },
};
