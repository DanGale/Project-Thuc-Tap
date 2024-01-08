const { sectionHeadingSchema } = require("../../../snippets/section-heading/schema");
const { carouselNavigationSchema } = require('../../../snippets/carousel_navigation/schema');
const { carouselPaginationSchema } = require('../../../snippets/carousel_pagination/schema');
const { productCardSchema } = require('../../../snippets/product-card/schema');

const schema = {
  name: 'ts:name',
  tag: 'section',
  class: 'section',
  settings: [],
  blocks: [
    {
      type: '@app',
    },
    {
      type: 'text',
      name: 'ts:blocks.text',
      settings: [
        {
          type: 'text',
          id: 'text',
          default: 'Text block',
          label: 'ts:blocks.text',
        },
      ],
    },
    {
      type: 'vendor',
      name: 'ts:blocks.vendor',
      limit: 1,
    },
    {
      type: 'title',
      name: 'ts:blocks.title',
      limit: 1,
    },
    {
      type: 'price',
      name: 'ts:blocks.price',
      limit: 1,
    },
    {
      type: 'description',
      name: 'ts:blocks.description',
      limit: 1,
    },
    {
      type: 'quantity_picker',
      name: 'ts:blocks.quantity_picker',
      limit: 1,
    },
    {
      type: 'variants',
      name: 'ts:blocks.variants.name',
      limit: 1,
    },
    {
      type: 'buy_button',
      name: 'ts:blocks.buy_button.name',
      limit: 1,
      settings: [
        { 
          type: 'checkbox',
          id: 'show_dynamic_checkout',
          label: 'ts:blocks.buy_button.show_dynamic_checkout.label',
          info: 'ts:blocks.buy_button.show_dynamic_checkout.info',
          default: true,
        },
        {
          type: 'checkbox',
          id: 'show_gift_card_recipient',
          label: 'ts:blocks.buy_button.show_gift_card_recipient.label',
          info: 'ts:blocks.buy_button.show_gift_card_recipient.info',
          default: false,
        },
      ],
    },
    {
      type: 'pickup',
      name: 'ts:blocks.pickup.name',
      limit: 1,
    },
    {
      type: 'collapse',
      name: 'ts:blocks.collapsible_tab.name',
      settings: [
        {
          type: 'text',
          id: 'collapse__text',
          label: 'ts:blocks.collapsible_tab.settings.heading.label',
          default: 'Collapse heading',
        },
        {
          type: 'richtext',
          id: 'collapse__content',
          label: 'ts:blocks.collapsible_tab.settings.content.label',
          default: '<p>More information about collapse</p>',
        },
      ],
    },
    {
      type: 'complementary',
      name: 'ts:blocks.complementary.name',
      limit: 1,
      settings: [
        ...sectionHeadingSchema(),
        {
          type: 'range',
          id: 'products_to_show',
          min: 2,
          max: 10,
          step: 1,
          default: 10,
          label: 'ts:blocks.complementary.settings.products_to_show.label',
        },
        {
          type: 'range',
          id: 'columns_desktop',
          min: 1,
          max: 4,
          step: 1,
          default: 2,
          label: 'ts:blocks.complementary.settings.columns_desktop.label',
        },
        {
          type: 'select',
          id: 'columns_mobile',
          default: '2',
          label: 'ts:blocks.complementary.settings.columns_mobile.label',
          options: [
            {
              value: '1',
              label: 'ts:blocks.complementary.settings.columns_mobile.options__1.label',
            },
            {
              value: '2',
              label: 'ts:blocks.complementary.settings.columns_mobile.options__2.label',
            },
          ],
        },
        ...carouselNavigationSchema(),
        ...carouselPaginationSchema(),
        ...productCardSchema(),
      ]
    }
  ],
};

module.exports = { schema };
