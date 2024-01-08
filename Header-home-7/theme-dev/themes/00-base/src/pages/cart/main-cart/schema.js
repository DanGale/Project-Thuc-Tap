const schema = {
  name: 'ts:name',
  settings: [],
  blocks: [
    {
      type: '@app',
    },
    {
      type: 'subtotal',
      name: 'ts:settings.subtotal.label',
      limit: 1,
    },
    {
      type: 'free_shipping',
      name: 'ts:settings.free_shipping.label',
      limit: 1,
    },
    {
      type: 'note',
      name: 'ts:settings.note.label',
      settings: [
        {
          type: 'select',
          id: 'type',
          label: 'ts:settings.type_of_note.label',
          options: [
            {
              value: 'regular',
              label: 'ts:settings.option_regular.label',
            },
            {
              value: 'collapse',
              label: 'ts:settings.option_collapse.label',
            },
          ],
          default: 'regular',
        },
      ],
      limit: 1,
    },
    {
      type: 'discount',
      name: 'ts:settings.discount.label',
      settings: [
        {
          type: 'select',
          id: 'type',
          label: 'ts:settings.type_of_discount.label',
          options: [
            {
              value: 'regular',
              label: 'ts:settings.option_regular.label',
            },
            {
              value: 'collapse',
              label: 'ts:settings.option_collapse.label',
            },
          ],
          default: 'collapse',
        },
      ],
      limit: 1,
    },
    {
      type: 'shipping',
      name: 'ts:settings.shipping.label',
      settings: [
        {
          type: 'select',
          id: 'type',
          label: 'ts:settings.type_of_shipping.label',
          options: [
            {
              value: 'regular',
              label: 'ts:settings.option_regular.label',
            },
            {
              value: 'collapse',
              label: 'ts:settings.option_collapse.label',
            },
          ],
          default: 'collapse',
        },
      ],
      limit: 1,
    },
  ],
  presets: [
    {
      name: 'ts:presets.name',
    },
  ],
};

module.exports = { schema };
