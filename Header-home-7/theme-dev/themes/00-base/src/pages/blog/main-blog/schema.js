const { articleCardSchema } = require('../../../snippets/article-card/schema');

const schema = {
  name: 'ts:name',
  tag: 'section',
  class: 'section',
  settings: [
    {
      type: 'blog',
      id: 'blog',
      label: 'ts:settings.blog.label',
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
      min: 2,
      max: 4,
      step: 1,
      default: 3,
      label: 'ts:settings.columns_desktop.label',
    },
    {
      type: 'number',
      label: 'ts:settings.columns_spacing.label',
      id: 'columns_spacing',
      default: 20,
    },
    ...articleCardSchema(),
  ],
  presets: [
    {
      name: 'ts:presets.name',
      settings: {
        blog: 'News',
      },
    },
  ],
};

module.exports = { schema };
