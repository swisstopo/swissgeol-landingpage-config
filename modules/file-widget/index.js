export default {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'File Widget',
  },
  fields: {
    add: {
        _files: {
            type: 'relationship',
            label: 'Selected File',
            withType: '@apostrophecms/file',
            required: false,
        },
    }
  }
};
