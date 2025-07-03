export default {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Button Widget',
  },
  fields: {
    add: {
      text: {
        type: 'string',
        label: 'Button Text',
        required: true
      },
      icon: {
        type: 'string',
        label: 'Icon',
        required: false
      },
      url: {
        type: 'url',
        label: 'Link URL',
        required: true
      },
      style: {
        type: 'select',
        label: 'Style',
        choices: [
          { label: 'Primary', value: 'primary' },
          { label: 'Secondary', value: 'secondary' },
        ],
        def: 'primary'
      },
      variant: {
        type: 'select',
        label: 'Variant',
        choices: [
          { label: 'Default', value: 'default' },
          { label: 'Icon', value: 'icon' },
          { label: 'Chip', value: 'chip' },
        ],
        def: 'default'
      },
      size: {
        type: 'select',
        label: 'Size',
        choices: [
          { label: 'Large', value: 'large' },
          { label: 'Normal', value: 'normal' },
          { label: 'Small', value: 'small' },
        ],
        def: 'normal'
      }
    }
  },
};
