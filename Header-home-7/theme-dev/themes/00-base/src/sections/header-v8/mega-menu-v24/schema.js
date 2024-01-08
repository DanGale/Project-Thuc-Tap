
const schema = {
  name: 'ts:name',
  class: 'section-mega-menu',
  settings: [
    {
      type: 'select',
      id: 'index',
      label: 'ts:settings.index_number.label',
      default: '4',
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
        {
          value: '7',
          label: 'ts:settings.index_number.option_8.label',
        },
        {
          value: '8',
          label: 'ts:settings.index_number.option_9.label',
        },
        {
          value: '9',
          label: 'ts:settings.index_number.option_10.label',
        },
      ],
    },
    {
      type: 'text',
      id: 'heading_1',
      default: 'Quick links',
      label: 'ts:settings.heading_1.label',
    },
    {
      type: 'link_list',
      id: 'menu_style1',
      label: 'ts:settings.menu_style1.label',
      info: 'ts:settings.menu_style1.info',
    },
    {
      type: 'text',
      id: 'heading_2',
      default: 'Quick links',
      label: 'ts:settings.heading_2.label',
    },
    {
      type: 'link_list',
      id: 'menu_style2',
      label: 'ts:settings.menu_style2.label',
      info: 'ts:settings.menu_style2.info',
    },
    {
      type: 'text',
      id: 'heading_3',
      default: 'Quick links',
      label: 'ts:settings.heading_3.label',
    },
    {
      type: 'link_list',
      id: 'menu_style3',
      label: 'ts:settings.menu_style3.label',
      info: 'ts:settings.menu_style3.info',
    },
    {
      type: 'image_picker',
      id: 'image',
      label: 'ts:settings.image.label',
      info: 'Support jpg, jpeg, png, svg',
    },
    {
      type: 'url',
      id: 'button_link',
      label: 'ts:settings.button_link.label',
      default: '/collections/all',
    },
  ],
  presets: [
    {
      name: 'ts:presets.name',
    },
  ],
};

module.exports = { schema };
