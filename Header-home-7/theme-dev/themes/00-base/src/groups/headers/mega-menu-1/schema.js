const schema = {
  name: 'ts:name',
  class: 'section-mega-menu',
  settings: [
    {
      type: 'select',
      id: 'index',
      label: 'ts:settings.index_number.label',
      options: [
        {
          value: '0',
          label: 'ts:settings.index_number.option_1.label',
        },
        {
          value: '1',
          label: 'ts:settings.index_number.option_2.label',
        },
        {
          value: '2',
          label: 'ts:settings.index_number.option_3.label',
        },
        {
          value: '3',
          label: 'ts:settings.index_number.option_4.label',
        },
        {
          value: '4',
          label: 'ts:settings.index_number.option_5.label',
        },
        {
          value: '5',
          label: 'ts:settings.index_number.option_6.label',
        },
        {
          value: '6',
          label: 'ts:settings.index_number.option_7.label',
        },
        {
          value: '7',
          label: 'ts:settings.index_number.option_8.label',
        },
        {
          value: '8',
          label: 'ts:settings.index_number.option_9.label',
        },
        {
          value: '9',
          label: 'ts:settings.index_number.option_10.label',
        },
      ],
      default: '0',
    },
  ],
  presets: [
    {
      name: 'ts:presets.name',
    },
  ],
};

module.exports = { schema };
