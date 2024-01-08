const { buttonSchema } = require('../../snippets/button/schema');

const schema = {
  name: 'ts:name',
  settings: [
    {
      type: 'checkbox',
      id: 'reverse',
      label: 'ts:settings.reverse.label',
      default: false,
    },
    {
      type: 'image_picker',
      id: 'image',
      label: 'ts:settings.image.label',
    },
    {
      type: 'text',
      id: 'title',
      label: 'ts:settings.title.label',
    },
    {
      type: 'richtext',
      id: 'description',
      label: 'ts:settings.description.label',
    },
    ...buttonSchema(),
  ],
  presets: [
    {
      name: 'ts:presets.name',
      settings: {
        title: 'Call to action title',
        description: '<p>Call to action description</p>',
      },
    },
  ],
};

module.exports = { schema };
