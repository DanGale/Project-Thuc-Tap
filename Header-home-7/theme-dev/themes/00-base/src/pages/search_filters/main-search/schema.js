const { articleCardSchema } = require('../../../snippets/article-card/schema');
const { productCardSchema } = require('../../../snippets/product-card/schema');

const schema = {
  name: 'ts:name',
  tag: 'section',
  class: 'section',
  settings: [
    {
      type: 'range',
      id: 'columns_desktop',
      min: 1,
      max: 6,
      step: 1,
      default: 4,
      label: 'ts:settings.columns_desktop.label',
    },
    {
      type: 'range',
      id: 'products_per_page',
      min: 8,
      max: 24,
      step: 1,
      default: 18,
      label: 'ts:settings.products_per_page.label',
    },
    {
      type: 'header',
      content: 'ts:settings.header__3.content',
    },
    {
      type: 'checkbox',
      id: 'enable_filtering',
      default: true,
      label: 'ts:settings.filtering_and_sorting.settings.enable_filtering.label',
      info: 'ts:settings.filtering_and_sorting.settings.enable_filtering.info',
    },
    {
      type: 'select',
      id: 'filter_type',
      options: [
        {
          value: 'horizontal',
          label: 'ts:settings.filtering_and_sorting.settings.desktop_layout.option.label_1',
        },
        {
          value: 'vertical',
          label: 'ts:settings.filtering_and_sorting.settings.desktop_layout.option.label_2',
        },
        {
          value: 'drawer',
          label: 'ts:settings.filtering_and_sorting.settings.desktop_layout.option.label_3',
        },
      ],
      default: 'horizontal',
      label: 'ts:settings.filtering_and_sorting.settings.desktop_layout.label',
    },
    {
      type: 'checkbox',
      id: 'enable_sorting',
      default: true,
      label: 'ts:settings.filtering_and_sorting.settings.enable_sorting.label',
    },
    ...productCardSchema(),
    ...articleCardSchema(),
  ],
};

module.exports = { schema };
