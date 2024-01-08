const schema = {
  name: 'ts:name',
  settings: [
    {
      type: 'image_picker',
      id: 'image_before',
      label: 'ts:settings.image_before.label',
    },
    {
      type: 'image_picker',
      id: 'image_after',
      label: 'ts:settings.image_after.label',
    },
  ],
  blocks: [],
  presets: [
    {
      name: 'ts:presets.name',
    },
  ],
};

module.exports = { schema };
