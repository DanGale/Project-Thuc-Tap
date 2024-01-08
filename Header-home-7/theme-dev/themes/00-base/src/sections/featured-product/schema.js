const { colorSchema, headingSize } = require('../all/schema');

const schema = {
  name: 'ts:name',
  tag: 'section',
  class: 'section section-featured-product',
  blocks: [
    {
      type: '@app',
    },
    {
      type: 'text',
      name: 'ts:blocks.text.name',
      settings: [
        {
          type: 'text',
          id: 'text',
          default: 'Text block',
          label: 'ts:blocks.text.settings.text.label',
        },
        {
          type: 'select',
          id: 'text_style',
          options: [
            {
              value: 'body',
              label: 'ts:blocks.text.settings.text_style.options__1.label',
            },
            {
              value: 'subtitle',
              label: 'ts:blocks.text.settings.text_style.options__2.label',
            },
            {
              value: 'uppercase',
              label: 'ts:blocks.text.settings.text_style.options__3.label',
            },
          ],
          default: 'body',
          label: 'ts:blocks.text.settings.text_style.label',
        },
      ],
    },
    {
      type: 'title',
      name: 'ts:blocks.title.name',
      limit: 1,
      settings: [
        {
          ...headingSize,
        },
      ],
    },
    {
      type: 'price',
      name: 'ts:blocks.price.name',
      limit: 1,
    },
    {
      type: 'quantity_selector',
      name: 'ts:blocks.quantity_selector.name',
      limit: 1,
    },
    {
      type: 'variant_picker',
      name: 'ts:blocks.variant_picker.name',
      limit: 1,
      settings: [
        {
          type: 'select',
          id: 'picker_type',
          options: [
            {
              value: 'dropdown',
              label: 'ts:blocks.variant_picker.settings.picker_type.options__1.label',
            },
            {
              value: 'button',
              label: 'ts:blocks.variant_picker.settings.picker_type.options__2.label',
            },
          ],
          default: 'button',
          label: 'ts:blocks.variant_picker.settings.picker_type.label',
        },
      ],
    },
    {
      type: 'buy_buttons',
      name: 'ts:blocks.buy_buttons.name',
      limit: 1,
      settings: [
        {
          type: 'checkbox',
          id: 'show_dynamic_checkout',
          default: true,
          label: 'ts:blocks.buy_buttons.settings.show_dynamic_checkout.label',
          info: 'ts:blocks.buy_buttons.settings.show_dynamic_checkout.info',
        },
      ],
    },
    {
      type: 'share',
      name: 'ts:blocks.share.name',
      limit: 1,
      settings: [
        {
          type: 'text',
          id: 'share_label',
          label: 'ts:blocks.share.settings.text.label',
          default: 'Share',
        },
        {
          type: 'paragraph',
          content: 'ts:blocks.share.settings.featured_image_info.content',
        },
        {
          type: 'paragraph',
          content: 'ts:blocks.share.settings.title_info.content',
        },
      ],
    },
    {
      type: 'custom_liquid',
      name: 'ts:blocks.custom_liquid.name',
      settings: [
        {
          type: 'liquid',
          id: 'custom_liquid',
          label: 'ts:blocks.custom_liquid.settings.custom_liquid.label',
        },
      ],
    },
    {
      type: 'rating',
      name: 'ts:blocks.rating.name',
      limit: 1,
      settings: [
        {
          type: 'paragraph',
          content: 'ts:blocks.rating.settings.paragraph.content',
        },
      ],
    },
  ],
  settings: [
    {
      type: 'product',
      id: 'product',
      label: 'ts:settings.product.label',
    },
    {
      ...colorSchema,
    },
    {
      type: 'checkbox',
      id: 'secondary_background',
      default: false,
      label: 'ts:settings.secondary_background.label',
    },
    {
      type: 'header',
      content: 'ts:settings.header.content',
      info: 'ts:settings.header.info',
    },
    {
      type: 'checkbox',
      id: 'hide_variants',
      default: false,
      label: 't:sections.main-product.settings.hide_variants.label',
    },
    {
      type: 'checkbox',
      id: 'enable_video_looping',
      default: false,
      label: 'ts:settings.enable_video_looping.label',
    },
  ],
  presets: [
    {
      name: 'ts:presets.name',
      blocks: [
        {
          type: 'text',
          settings: {
            text: '{{ section.settings.product.vendor }}',
            text_style: 'uppercase',
          },
        },
        {
          type: 'title',
        },
        {
          type: 'text',
          settings: {
            text: '{{ section.settings.product.metafields.descriptors.subtitle.value }}',
            text_style: 'subtitle',
          },
        },
        {
          type: 'price',
        },
        {
          type: 'variant_picker',
        },
        {
          type: 'quantity_selector',
        },
        {
          type: 'buy_buttons',
        },
        {
          type: 'share',
        },
      ],
    },
  ],
};

module.exports = { schema };
