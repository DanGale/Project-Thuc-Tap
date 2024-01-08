const buttonSchema = (
  sectionHandle = 'all',
  defaultData = {
    button_text: 'Shop all',
    button_link: '/collections/all',
    button_style: 'primary',
    button_size: 'md',
    button_radius: 0,
    button_padding: 3,
    button_type: 'button',
  },
  type = 'settings',
) => {
  let secHandle = 'all';
  if (sectionHandle !== 'all') {
    secHandle = `${secHandle}.${type}`;
  }

  return [
    {
      type: 'text',
      id: 'button_text',
      label: `t:sections.${secHandle}.button_text.label`,
      default: defaultData.button_text,
    },
    {
      type: 'url',
      id: 'button_link',
      label: `t:sections.${secHandle}.button_link.label`,
      default: defaultData.button_link,
    },
    {
      type: 'select',
      id: 'button_style',
      label: `t:sections.${secHandle}.button_style.label`,
      options: [
        {
          value: 'primary',
          label: `t:sections.${secHandle}.button_style.option__1.label`,
        },
        {
          value: 'secondary',
          label: `t:sections.${secHandle}.button_style.option__2.label`,
        },
        {
          value: 'link',
          label: `t:sections.${secHandle}.button_style.option__3.label`,
        },
      ],
      default: defaultData.button_style,
    },
    {
      type: 'select',
      id: 'button_size',
      label: `t:sections.${secHandle}.button_size.label`,
      options: [
        {
          value: 'xs',
          label: `t:sections.${secHandle}.button_size.option__0.label`,
        },
        {
          value: 'sm',
          label: `t:sections.${secHandle}.button_size.option__1.label`,
        },
        {
          value: 'md',
          label: `t:sections.${secHandle}.button_size.option__2.label`,
        },
        {
          value: 'lg',
          label: `t:sections.${secHandle}.button_size.option__3.label`,
        },
      ],
      default: defaultData.button_size,
    },

    {
      type: 'select',
      id: 'button_type',
      label: `t:sections.${secHandle}.button_type.label`,
      options: [
        {
          value: 'button',
          label: `t:sections.${secHandle}.button_type.option__1.label`,
        },
        {
          value: 'submit',
          label: `t:sections.${secHandle}.button_type.option__2.label`,
        },
        {
          value: 'reset',
          label: `t:sections.${secHandle}.button_type.option__3.label`,
        },
      ],
      default: defaultData.button_type,
    },
    {
      type: 'range',
      id: 'button_radius',
      label: `t:sections.${secHandle}.button_radius.label`,
      max: 49,
      min: 0,
      step: 1,
      unit: 'rem',
      default: defaultData.button_radius,
    },
    {
      type: 'range',
      id: 'button_padding',
      label: `t:sections.${secHandle}.button_padding.label`,
      max: 10,
      min: 3,
      step: 0.2,
      unit: 'rem',
      default: defaultData.button_padding,
    },
  ];
};

module.exports = { buttonSchema };
