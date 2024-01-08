const schema = {
  name: 'ts:name',
  settings: [
    {
      type: 'image_picker',
      id: 'logo',
      label: 'ts:settings.menu.logo.label',
    },
    {
      type: 'range',
      id: 'logo_width',
      min: 50,
      max: 250,
      step: 10,
      default: 100,
      unit: 't:sections.header.settings.logo_width.unit',
      label: 't:sections.header.settings.logo_width.label',
    },
  ],
};

module.exports = { schema };
