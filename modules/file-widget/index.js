export default {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'File Widget',
  },
  fields: {
    add: {
        _file: {
            type: 'relationship',
            label: 'Selected File',
            withType: '@apostrophecms/file',
            max: 1,
            required: true,
        },
        fileLabel: {
            type: 'string',
            label: 'File Label',
            required: true,
            help: 'Label for the file link, e.g., "Download PDF"'
        },
    }
  }
};
