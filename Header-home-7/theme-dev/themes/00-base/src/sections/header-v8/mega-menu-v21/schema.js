const schema = {
  name: 'ts:name',
  class: 'section-mega-menu',
  settings: [
    {
      type: 'select',
      id: 'index',
      label: 'ts:settings.index_number.label',
      default: '2',
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
        }
      ]
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
      type: 'text',
      id: 'heading_4',
      default: 'Quick links',
      label: 'ts:settings.heading_4.label',
    },
    {
      type: 'link_list',
      id: 'menu_style4',
      label: 'ts:settings.menu_style4.label',
      info: 'ts:settings.menu_style4.info',
    },
    {
      type: 'text',
      id: 'heading_5',
      default: 'Quick links',
      label: 'ts:settings.heading_5.label',
    },
    {
      type: 'link_list',
      id: 'menu_style5',
      label: 'ts:settings.menu_style5.label',
      info: 'ts:settings.menu_style5.info',
    },
    {
      type: 'text',
      id: 'heading_6',
      default: 'Quick links',
      label: 'ts:settings.heading_6.label',
    },
    {
      type: 'link_list',
      id: 'menu_style6',
      label: 'ts:settings.menu_style6.label',
      info: 'ts:settings.menu_style6.info',
    }
  ],
  presets: [
    {
      name: 'ts:presets.name',
    },
  ],
};

module.exports = { schema };
