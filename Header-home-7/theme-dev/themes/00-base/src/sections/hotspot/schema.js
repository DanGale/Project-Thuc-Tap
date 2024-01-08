const { productCardSchema } = require('../../snippets/product-card/schema');

const schema = {
  name: 'ts:name',
  settings: [
    {
      type: 'image_picker',
      id: 'image',
      label: 'ts:settings.image.label',
    },
    ...productCardSchema(),
  ],
  blocks: [
    {
      name: 'ts:blocks.name',
      type: 'hotspot-trigger',
      settings: [
        {
          type: 'number',
          id: 'top',
          label: 'ts:blocks.settings.top.label',
          default: 20,
        },
        {
          type: 'number',
          id: 'left',
          label: 'ts:blocks.settings.left.label',
          default: 20,
        },
        {
          type: 'product',
          id: 'product',
          label: 'ts:blocks.settings.product.label',
          info: 'ts:blocks.settings.product.info',
        },
        {
          type: 'select',
          id: 'placement',
          label: 'ts:blocks.settings.placement.label',
          info: 'ts:blocks.settings.placement.info',
          options: [
            {
              value: 'top-right',
              label: 'ts:blocks.settings.placement.options__1.label',
            },
            {
              value: 'top-center',
              label: 'ts:blocks.settings.placement.options__2.label',
            },
            {
              value: 'top-left',
              label: 'ts:blocks.settings.placement.options__3.label',
            },
            {
              value: 'bottom-right',
              label: 'ts:blocks.settings.placement.options__4.label',
            },
            {
              value: 'bottom-center',
              label: 'ts:blocks.settings.placement.options__5.label',
            },
            {
              value: 'bottom-left',
              label: 'ts:blocks.settings.placement.options__6.label',
            },
            {
              value: 'right-top',
              label: 'ts:blocks.settings.placement.options__7.label',
            },
            {
              value: 'right-center',
              label: 'ts:blocks.settings.placement.options__8.label',
            },
            {
              value: 'right-bottom',
              label: 'ts:blocks.settings.placement.options__9.label',
            },
            {
              value: 'left-top',
              label: 'ts:blocks.settings.placement.options__10.label',
            },
            {
              value: 'left-center',
              label: 'ts:blocks.settings.placement.options__11.label',
            },
            {
              value: 'left-bottom',
              label: 'ts:blocks.settings.placement.options__12.label',
            },
          ],
          default: 'right-center',
        },
      ],
    },
  ],
  presets: [
    {
      name: 'ts:presets.name',
    },
  ],
};

module.exports = { schema };
