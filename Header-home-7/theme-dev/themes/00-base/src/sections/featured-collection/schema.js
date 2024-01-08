const { sectionHeadingSchema } = require('../../snippets/section-heading/schema');
const { productCardSchema } = require('../../snippets/product-card/schema');
const { carouselNavigationSchema } = require('../../snippets/carousel_navigation/schema');
const { carouselPaginationSchema } = require('../../snippets/carousel_pagination/schema');

const schema = {
  name: 'ts:name',
  tag: 'section',
  class: 'section',
  settings: [
    ...sectionHeadingSchema(),
    {
      type: 'collection',
      id: 'collection',
      label: 'ts:settings.collection.label',
    },
    {
      type: 'range',
      id: 'limit',
      min: 2,
      max: 20,
      step: 1,
      default: 12,
      label: 'ts:settings.limit.label',
    },
    {
      type: 'range',
      id: 'columns_desktop',
      min: 3,
      max: 5,
      step: 1,
      default: 3,
      label: 'ts:settings.columns_desktop.label',
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
    ...carouselNavigationSchema(),
    ...carouselPaginationSchema(),
    ...productCardSchema(),
  ],
};

module.exports = { schema };
