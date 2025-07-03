export default {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Dropdown Widget',
  },
  fields: {
    add: {
      buttonLabel: {
        type: 'string',
        label: 'Button Label',
        def: 'More'
      },
      links: {
        type: 'array',
        label: 'Dropdown Links',
        titleField: 'label',
        fields: {
          add: {
            label: {
              type: 'string',
              label: 'Link Label',
              required: true
            },
            url: {
              type: 'url',
              label: 'Link URL',
              required: true
            }
          }
        }
      }
    }
  }
};