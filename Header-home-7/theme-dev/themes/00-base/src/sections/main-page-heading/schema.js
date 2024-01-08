const schema = {
  name: 'ts:name',
  settings: [
    {
      type: 'select',
      id: 'title_tag',
      label: 'ts:settings.title_tag.label',
      options: [
        {
          value: 'h1',
          label: 'h1',
        },
        {
          value: 'h2',
          label: 'h2',
        },
        {
          value: 'h3',
          label: 'h3',
        },
        {
          value: 'h4',
          label: 'h4',
        },
        {
          value: 'h5',
          label: 'h5',
        },
        {
          value: 'h6',
          label: 'h6',
        },
      ],
      default: 'h1',
    },
    {
      type: 'text',
      id: 'title',
      label: 'ts:settings.title.label',
    },
    {
      type: 'richtext',
      id: 'description',
      label: 'ts:settings.description.label',
    },
    {
      type: 'select',
      id: 'align',
      label: 'ts:settings.align.label',
      options: [
        {
          value: 'left',
          label: 'ts:settings.value_left.label',
        },
        {
          value: 'center',
          label: 'ts:settings.value_center.label',
        },
        {
          value: 'right',
          label: 'ts:settings.value_right.label',
        },
      ],
      default: 'left',
    },
  ],
  presets: [
    {
      name: 'ts:presets.name',
    },
  ],
};

module.exports = { schema };
