// const { hoverStyleSchema } = require('../../../snippets/hover-style/schema');
const schema = {
  name: 'ts:name',
  class: 'section-mega-menu',
  settings: [
    {
      type: 'select',
      id: 'index',
      label: 'ts:settings.index_number.label',
      options: [
        {
          value: '0',
          label: 'ts:settings.index_number.option_1.label',
        },
        {
          value: '1',
          label: 'ts:settings.index_number.option_2.label',
        },
        {
          value: '2',
          label: 'ts:settings.index_number.option_3.label',
        },
        {
          value: '3',
          label: 'ts:settings.index_number.option_4.label',
        },
        {
          value: '4',
          label: 'ts:settings.index_number.option_5.label',
        },
        {
          value: '5',
          label: 'ts:settings.index_number.option_6.label',
        },
        {
          value: '6',
          label: 'ts:settings.index_number.option_7.label',
        },
      ],
      default: '0',
    },
    {
      type: 'image_picker',
      id: 'image_1',
      label: 'ts:settings.image_1.label',
      info: 'Support jpg, jpeg, png, svg',
    },
    {
      type: 'text',
      id: 'button_1',
      label: 'ts:settings.button_1.label',
      default: 'Collection',
    },
    {
      type: 'url',
      id: 'button_link1',
      label: 'ts:settings.button_link1.label',
      default: '/collections/all',
    },
    {
      type: 'image_picker',
      id: 'image_2',
      label: 'ts:settings.image_2.label',
      info: 'Support jpg, jpeg, png, svg',
    },
    {
      type: 'text',
      id: 'button_2',
      label: 'ts:settings.button_2.label',
      default: 'Collection',
    },
    {
      type: 'url',
      id: 'button_link2',
      label: 'ts:settings.button_link2.label',
      default: '/collections/all',
    },
    {
      type: 'image_picker',
      id: 'image_3',
      label: 'ts:settings.image_3.label',
      info: 'Support jpg, jpeg, png, svg',
    },
    {
      type: 'text',
      id: 'button_3',
      label: 'ts:settings.button_3.label',
      default: 'Collection',
    },
    {
      type: 'url',
      id: 'button_link3',
      label: 'ts:settings.button_link3.label',
      default: '/collections/all',
    },
    {
      type: 'image_picker',
      id: 'image_4',
      label: 'ts:settings.image_4.label',
      info: 'Support jpg, jpeg, png, svg',
    },
    {
      type: 'text',
      id: 'button_4',
      label: 'ts:settings.button_4.label',
      default: 'Collection',
    },
    {
      type: 'url',
      id: 'button_link4',
      label: 'ts:settings.button_link4.label',
      default: '/collections/all',
    },
    {
      type: 'image_picker',
      id: 'image_5',
      label: 'ts:settings.image_5.label',
      info: 'Support jpg, jpeg, png, svg',
    },
    {
      type: 'text',
      id: 'button_5',
      label: 'ts:settings.button_5.label',
      default: 'Collection',
    },
    {
      type: 'url',
      id: 'button_link5',
      label: 'ts:settings.button_link5.label',
      default: '/collections/all',
    },
    {
      type: 'image_picker',
      id: 'image_6',
      label: 'ts:settings.image_6.label',
      info: 'Support jpg, jpeg, png, svg',
    },
    {
      type: 'text',
      id: 'button_6',
      label: 'ts:settings.button_6.label',
      default: 'Collection',
    },
    {
      type: 'url',
      id: 'button_link6',
      label: 'ts:settings.button_link6.label',
      default: '/collections/all',
    },
    {
      type: 'image_picker',
      id: 'image_7',
      label: 'ts:settings.image_7.label',
      info: 'Support jpg, jpeg, png, svg',
    },
    {
      type: 'text',
      id: 'button_7',
      label: 'ts:settings.button_7.label',
      default: 'Collection',
    },
    {
      type: 'url',
      id: 'button_link7',
      label: 'ts:settings.button_link7.label',
      default: '/collections/all',
    },
    {
      type: 'image_picker',
      id: 'image_8',
      label: 'ts:settings.image_8.label',
      info: 'Support jpg, jpeg, png, svg',
    },
    {
      type: 'text',
      id: 'button_8',
      label: 'ts:settings.button_8.label',
      default: 'Collection',
    },
    {
      type: 'url',
      id: 'button_link8',
      label: 'ts:settings.button_link8.label',
      default: '/collections/all',
    },
    {
      type: 'image_picker',
      id: 'image_9',
      label: 'ts:settings.image_9.label',
      info: 'Support jpg, jpeg, png, svg',
    },
    {
      type: 'text',
      id: 'button_9',
      label: 'ts:settings.button_9.label',
      default: 'Collection',
    },
    {
      type: 'url',
      id: 'button_link9',
      label: 'ts:settings.button_link9.label',
      default: '/collections/all',
    },
    {
      type: 'image_picker',
      id: 'image_10',
      label: 'ts:settings.image_10.label',
      info: 'Support jpg, jpeg, png, svg',
    },
    {
      type: 'text',
      id: 'button_10',
      label: 'ts:settings.button_10.label',
      default: 'Collection',
    },
    {
      type: 'url',
      id: 'button_link10',
      label: 'ts:settings.button_link10.label',
      default: '/collections/all',
    },
    // ...hoverStyleSchema(),
  ],
  presets: [
    {
      name: 'ts:presets.name',
    },
  ],
};

module.exports = { schema };
