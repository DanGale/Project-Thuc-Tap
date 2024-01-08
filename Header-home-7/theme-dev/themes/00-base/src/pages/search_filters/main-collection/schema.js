const { productCardSchema } = require('../../../snippets/product-card/schema');
const schema = {
  name: 'ts:name',
  class: 'section-collection-products',
  tag: 'section',
  settings: [
    {
      type: 'header',
      content: 'ts:settings.header__2.content',
    },
    {
      type: 'range',
      id: 'products_per_page',
      min: 8,
      max: 24,
      step: 1,
      default: 9,
      label: 'ts:settings.products_per_page.label',
    },
    {
      type: 'range',
      id: 'columns_desktop',
      min: 2,
      max: 4,
      step: 1,
      default: 3,
      label: 'ts:settings.columns_desktop.label',
    },
    ...productCardSchema(),
    {
      type: 'header',
      content: 'ts:settings.header__1.content',
    },
    {
      type: 'checkbox',
      id: 'enable_filtering',
      default: true,
      label: 'ts:settings.enable_filtering.label',
      info: 'ts:settings.enable_filtering.info',
    },
    {
      type: 'select',
      id: 'filter_type',
      options: [
        {
          value: 'horizontal',
          label: 'ts:settings.filter_type.options__1.label',
        },
        {
          value: 'vertical',
          label: 'ts:settings.filter_type.options__2.label',
        },
        {
          value: 'drawer',
          label: 'ts:settings.filter_type.options__3.label',
        },
      ],
      default: 'vertical',
      label: 'ts:settings.filter_type.label',
      info: 'ts:settings.filter_type.info',
    },
    {
      type: 'checkbox',
      id: 'enable_sorting',
      default: true,
      label: 'ts:settings.enable_sorting.label',
    },
    {
      type: 'header',
      content: 'ts:settings.header_mobile.content',
    },
    {
      type: 'select',
      id: 'columns_mobile',
      default: '2',
      label: 'ts:settings.columns_mobile.label',
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
    },
  ],
};

module.exports = { schema };
