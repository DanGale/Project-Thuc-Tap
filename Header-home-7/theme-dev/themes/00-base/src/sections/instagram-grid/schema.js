const { sectionHeadingSchema } = require('../../snippets/section-heading/schema');
const schema = {
  name: 'ts:name',
  settings: [
    ...sectionHeadingSchema(),
    {
      type: 'text',
      id: 'access_token',
      label: 'ts:settings.token',
    },
    {
      type: 'range',
      id: 'collumn_lg',
      min: 1,
      max: 12,
      step: 1,
      unit: 'Col',
      label: 'ts:settings.collumn_lg',
      default: 6,
    },
    {
      type: 'range',
      id: 'collumn_md',
      min: 1,
      max: 6,
      step: 1,
      unit: 'Col',
      label: 'ts:settings.collumn_md',
      default: 3,
    },
    {
      type: 'range',
      id: 'collumn_sm',
      min: 1,
      max: 4,
      step: 1,
      unit: 'Col',
      label: 'ts:settings.collumn_sm',
      default: 2,
    },
    {
      type: 'number',
      id: 'space',
      label: 'ts:settings.space',
      default: 15,
    },
  ],
  presets: [
    {
      name: 'ts:presets.name',
    },
  ],
};

module.exports = { schema };
