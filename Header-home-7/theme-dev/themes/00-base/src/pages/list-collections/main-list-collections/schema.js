const schema = {
  name: 'ts:name',
  settings: [
    {
      type: 'select',
      id: 'sort',
      options: [
        {
          value: 'alphabetical',
          label: 'ts:settings.sort.options__1.label',
        },
        {
          value: 'alphabetical_reversed',
          label: 'ts:settings.sort.options__2.label',
        },
        {
          value: 'date_reversed',
          label: 'ts:settings.sort.options__3.label',
        },
        {
          value: 'date',
          label: 'ts:settings.sort.options__4.label',
        },
        {
          value: 'products_high',
          label: 'ts:settings.sort.options__5.label',
        },
        {
          value: 'products_low',
          label: 'ts:settings.sort.options__6.label',
        },
      ],
      default: 'alphabetical',
      label: 'ts:settings.sort.label',
    },
    {
      type: 'text',
      id: 'image_ratio',
      default: '3/4',
      label: 'ts:settings.image_ratio.label',
    },
    {
      type: 'checkbox',
      id: 'description',
      default: false,
      label: 'ts:settings.description.label',
    },
    {
      type: 'range',
      id: 'columns_desktop',
      min: 1,
      max: 4,
      step: 1,
      default: 3,
      label: 'ts:settings.columns_desktop.label',
    },
    {
      type: 'header',
      content: 'ts:settings.header_mobile.content',
    },
    {
      type: 'select',
      id: 'columns_mobile',
      options: [
        {
          value: '1',
          label: 'ts:settings.columns_mobile.options__1.label',
        },
        {
          value: '2',
          label: 'ts:settings.columns_mobile.options__2.label',
        },
      ],
      default: '1',
      label: 'ts:settings.columns_mobile.label',
    },
  ],
  presets: [
    {
      name: 'ts:presets.name',
    },
  ],
};

module.exports = { schema };
