export default {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Project',
    // Additionally add a `pluralLabel` option if needed.
  },
  fields: {
    add: {
      image: {
        label: 'Logo Image',
        type: 'area',
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/image': {}
          }
        }
      },
      _heroImage1: {
        type: 'relationship',
        label: 'Hero Image 1',
        withType: '@apostrophecms/image',
        required: true
      },
      _heroImage2: {
        type: 'relationship',
        label: 'Hero Image 2 (Optional)',
        withType: '@apostrophecms/image',
        required: false
      },
      backgroundColor: {
        type: 'string',
        label: 'Background Color Class',
        help: 'Enter a CSS class name for background color (e.g., bg-red, bg-blue, bg-gray)'
      },
      mainUrl: {
        type: 'url',
        label: 'Project URL',
        required: true
      },
      additionalUrls: {
        type: 'array',
        label: 'Additional URLs',
        fields: {
          add: {
            label: {
              type: 'string',
              label: 'Label'
            },
            url: {
              type: 'url',
              label: 'URL'
            }
          }
        }
      },
      descriptionItems: {
        type: 'array',
        label: 'Description Items',
        titleField: 'text',
        fields: {
          add: {
            label: {
              type: 'string',
              label: 'Text'
            },
          }
        }
      },
      },
    },
};
