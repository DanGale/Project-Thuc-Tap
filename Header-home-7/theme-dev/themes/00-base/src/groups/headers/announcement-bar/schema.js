const { colorSchema } = require('../../../sections/all/schema');

const schema = {
  name: 'ts:name',
  max_blocks: 12,
  blocks: [
    {
      type: 'announcement',
      name: 'ts:blocks.announcement.name',
      settings: [
        {
          type: 'text',
          id: 'text',
          default: 'Welcome to our store',
          label: 'ts:blocks.announcement.settings.text.label',
        },
        {
          ...colorSchema,
        },
        {
          type: 'url',
          id: 'link',
          label: 'ts:blocks.announcement.settings.link.label',
        },
      ],
    },
  ],
  default: {
    blocks: [
      {
        type: 'announcement',
      },
    ],
  },
};

module.exports = { schema };
