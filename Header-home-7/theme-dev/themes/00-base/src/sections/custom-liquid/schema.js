const schema = {
  name: 'ts:name',
  tag: 'section',
  class: 'section',
  settings: [
    {
      type: 'liquid',
      id: 'custom_liquid',
      label: 'ts:settings.custom_liquid.label',
      info: 'ts:settings.custom_liquid.info',
    },
  ],
  presets: [
    {
      name: 'ts:presets.name',
    },
  ],
};

module.exports = { schema };
