export default {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Two Column Widget',
  },
  fields: {
    add: {
      columnLeft: {
        type: 'area',
        label: 'Left Column Content',
        options: {
          widgets: {
            "projects": {},

          }
        }
      },
      // This will be the area for the right column
      columnRight: {
        type: 'area',
        label: 'Right Column Content',
        options: {
          widgets: {
            "projects": {},
          }
        }
      }
    }
  }
};
