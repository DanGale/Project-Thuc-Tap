const schema = {
  name: 'ts:name',
  class: 'section-header',
  settings: [
    {
      type: 'color_scheme',
      id: 'color_scheme',
      label: 'tall:colors.label',
    },
    {
      type: 'image_picker',
      id: 'logo',
      label: 'ts:settings.logo.label',
    },
    {
      type: 'range',
      id: 'logo_width',
      min: 50,
      max: 250,
      step: 10,
      default: 100,
      unit: 'ts:settings.logo_width.unit',
      label: 'ts:settings.logo_width.label',
    },
    {
      type: 'select',
      id: 'logo_position',
      options: [
        {
          value: 'left',
          label: 'ts:settings.logo_position.options_1.label',
        },
        {
          value: 'center',
          label: 'ts:settings.logo_position.options_2.label',
        },
      ],
      default: 'center',
      label: 'ts:settings.logo_position.label',
      info: 'ts:settings.logo_position.info',
    },
    {
      type: 'link_list',
      id: 'menu',
      default: 'main-menu',
      label: 'ts:settings.menu.label',
    },
    {
      type: 'select',
      id: 'menu_type',
      options: [
        {
          value: 'default',
          label: 'ts:settings.menu_type.options__1.label',
        },
        {
          value: 'drawer',
          label: 'ts:settings.menu_type.options__2.label',
        },
      ],
      default: 'default',
      label: 'ts:settings.menu_type.label',
      info: 'ts:settings.menu_type.info',
    },
    {
      type: 'select',
      id: 'sticky_header_type',
      options: [
        {
          value: 'down',
          label: 'ts:settings.sticky_header_type.options_1.label',
        },
        {
          value: 'up',
          label: 'ts:settings.sticky_header_type.options_2.label',
        },
        {
          value: 'none',
          label: 'ts:settings.sticky_header_type.options_3.label',
        },
      ],
      default: 'down',
      label: 'ts:settings.sticky_header_type.label',
      info: 'ts:settings.sticky_header_type.info',
    },
    {
      type: 'select',
      id: 'event_type',
      options: [
        {
          value: 'hover',
          label: 'ts:settings.event_type.options_1.label',
        },
        {
          value: 'click',
          label: 'ts:settings.event_type.options_2.label',
        },
      ],
      default: 'hover',
      label: 'ts:settings.event_type.label',
    },
    {
      type: 'header',
      content: 'ts:settings.language_select.content',
      info: 'ts:settings.language_select.info',
    },
    {
      type: 'checkbox',
      id: 'language_select',
      label: 'ts:settings.language_select.label',
      default: false,
    },
    {
      type: 'header',
      content: 'ts:settings.currency_select.content',
      info: 'ts:settings.currency_select.info',
    },
    {
      type: 'checkbox',
      id: 'currency_select',
      label: 'ts:settings.currency_select.label',
      default: false,
    },
  ],
};

module.exports = { schema };
