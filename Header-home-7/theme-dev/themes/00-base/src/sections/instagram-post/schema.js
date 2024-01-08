const { sectionHeadingSchema } = require('../../snippets/section-heading/schema');
const schema = {
  name: 'ts:name',
  settings: [
    ...sectionHeadingSchema(),
    {
      type: 'text',
      id: 'access_token',
      label: 'ts:settings.token.label',
    },
    {
      type: 'number',
      id: 'space',
      label: 'ts:settings.space.label',
      default: 25,
    },
  ],
  presets: [
    {
      name: 'ts:presets.name',
    },
  ],
};

module.exports = { schema };
