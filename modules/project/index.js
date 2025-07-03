export default {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Project',
    // Additionally add a `pluralLabel` option if needed.
  },
  fields: {
    add: {
      title: {
        type: 'string',
        label: 'Title',
        required: true
      },
      image: {
        label: 'Project Photo',
        type: 'area',
        options: {
          max: 1, // Nur ein Bild erlauben
          widgets: {
            '@apostrophecms/image': {} // Nur das Bild-Widget erlauben
          }
        }
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