export default {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Projects Widget',
  },
  fields: {
    add: {
      _selectedProject: {
        type: 'relationship',
        label: 'Selected Project',
        withType: 'project',
        max: 1,
        required: true,
      },
    }
  }
};