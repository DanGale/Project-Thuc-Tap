const { articleCardSchema18 } = require('../../../snippets/article-card-style18/schema');

const schema = {
  name: 'ts:name',
  class: 'section-mega-menu',
  settings: [
    {
      type: 'select',
      id: 'index',
      label: 'ts:settings.index_number.label',
      default: '3',
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
      type: 'range',
      id: 'limit',
      min: 2,
      max: 4,
      step: 1,
      default: 3,
      label: 'ts:settings.limit.label',
    },
    {
      type: 'blog',
      id: 'blog',
      label: 'ts:settings.blog.label',
    },
    ...articleCardSchema18()
  ],
  presets: [
    {
      name: 'ts:presets.name',
      settings: {
        blog: 'Test',
      },
    },
  ],
};

module.exports = { schema };
