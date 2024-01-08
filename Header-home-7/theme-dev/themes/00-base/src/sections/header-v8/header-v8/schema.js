const schema = {
  name: 'ts:name',
  class: 'section-header',
  settings: [
    {
      type: 'select',
      id: 'width',
      label: 'ts:settings.width.label',
      default: '1400',
      options: [
        {
          value: '1400',
          label: 'ts:settings.width.option_1.label',
        },
        {
          value: 'unset',
          label: 'ts:settings.width.option_2.label',
        },
      ],
    },
    {
      type: 'header',
      content: 'Header setting',
    },
    {
      type: 'checkbox',
      id: 'transparent',
      default: false,
      label: 'ts:settings.transparent.label',
    },
    {
      type: 'image_picker',
      id: 'logo',
      label: 'ts:settings.logo.label',
      info: 'Support jpg, jpeg, png, svg',
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
    },
    {
      type: 'select',
      id: 'hamburger_type',
      options: [
        {
          value: 'default',
          label: 'ts:settings.hamburger_type.options__1.label',
        },
        {
          value: 'drawer',
          label: 'ts:settings.hamburger_type.options__2.label',
        },
        {
          value: 'horizontal',
          label: 'ts:settings.hamburger_type.options__3.label',
        },
      ],
      default: 'default',
      label: 'ts:settings.hamburger_type.label',
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
  ],
};

module.exports = { schema };
