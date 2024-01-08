const { buttonSchema } = require('../../../snippets/button/schema');

const schema = {
  name: 'ts:name',
  settings: [],
  blocks: [
    {
      type: 'title',
      name: 'ts:settings.title.name',
      limit: 1,
      settings: [
        {
          type: 'text',
          id: 'title',
          label: 'ts:settings.title.title.label',
        },
        {
          type: 'text',
          id: 'subtitle',
          label: 'ts:settings.title.subtitle.label',
        },
        {
          type: 'textarea',
          id: 'description',
          label: 'ts:settings.title.description.label',
        },
      ],
    },
    {
      type: 'button',
      limit: 1,
      name: 'ts:settings.button.name',
      settings: [...buttonSchema()],
    },
  ],
  presets: [
    {
      name: 'ts:presets.name',
    },
  ],
};

module.exports = { schema };
