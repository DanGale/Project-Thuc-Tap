const { sectionHeadingSchema } = require('../../../snippets/section-heading/schema');
const { carouselNavigationSchema } = require('../../../snippets/carousel_navigation/schema');
const { carouselPaginationSchema } = require('../../../snippets/carousel_pagination/schema');
const { productCardSchema } = require('../../../snippets/product-card/schema');
const schema = {
  name: 'ts:name',
  tag: 'section',
  class: 'section',
  settings: [
    {
      type: 'paragraph',
      content: 'ts:settings.paragraph__1.content',
    },
    ...sectionHeadingSchema(),
    {
      type: 'select',
      id: 'recommend_intent',
      default: 'related',
      label: 'ts:settings.recommend_intent.label',
      options: [
        {
          value: 'related',
          label: 'ts:settings.recommend_intent.options__1.label',
        },
        {
          value: 'complementary',
          label: 'ts:settings.recommend_intent.options__2.label',
        },
      ],
    },
    {
      type: 'range',
      id: 'products_to_show',
      min: 2,
      max: 10,
      step: 1,
      default: 10,
      label: 'ts:settings.products_to_show.label',
    },
    {
      type: 'range',
      id: 'columns_desktop',
      min: 3,
      max: 5,
      step: 1,
      default: 4,
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
