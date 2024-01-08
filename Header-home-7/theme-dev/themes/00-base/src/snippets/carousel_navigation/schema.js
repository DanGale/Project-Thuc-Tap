const carouselNavigationSchema = (
  sectionHandle = 'all',
  defaultData = {
    carousel_nav_disabled: false,
    carousel_nav_mobile_disabled: false,
    carousel_nav_position: '',
    carousel_nav_align: 'center',
    carousel_nav_style: 'boxes',
    carousel_nav_icon: 'chevron-right',
  },
  type = 'settings',
) => {
  let secHandle = 'all';
  if (sectionHandle !== 'all') {
    secHandle = `${secHandle}.${type}`;
  }

  return [
    {
      type: 'header',
      content: `t:sections.${secHandle}.carousel_nav_heading.label`,
    },
    {
      type: 'checkbox',
      id: 'carousel_nav_disabled',
      default: defaultData.carousel_nav_disabled,
      label: `t:sections.${secHandle}.carousel_nav_disabled.label`,
    },
    {
      type: 'checkbox',
      id: 'carousel_nav_mobile_disabled',
      default: defaultData.carousel_nav_mobile_disabled,
      label: `t:sections.${secHandle}.carousel_nav_mobile_disabled.label`,
    },
    {
      type: 'select',
      id: 'carousel_nav_position',
      default: defaultData.carousel_nav_position,
      label: `t:sections.${secHandle}.carousel_nav_position.label`,
      options: [
        {
          value: '',
          label: `t:sections.${secHandle}.carousel_nav_position.options__1.label`,
        },
        {
          value: 'in-content',
          label: `t:sections.${secHandle}.carousel_nav_position.options__2.label`,
        },
        {
          value: 'top',
          label: `t:sections.${secHandle}.carousel_nav_position.options__3.label`,
        },
      ],
    },
    {
      type: 'select',
      id: 'carousel_nav_align',
      default: defaultData.carousel_nav_align,
      label: `t:sections.${secHandle}.carousel_nav_align.label`,
      options: [
        {
          value: '',
          label: `t:sections.${secHandle}.carousel_nav_align.options__1.label`,
        },
        {
          value: 'center',
          label: `t:sections.${secHandle}.carousel_nav_align.options__2.label`,
        },
        {
          value: 'right',
          label: `t:sections.${secHandle}.carousel_nav_align.options__3.label`,
        },
      ],
    },
    {
      type: 'select',
      id: 'carousel_nav_style',
      default: defaultData.carousel_nav_style,
      label: `t:sections.${secHandle}.carousel_nav_style.label`,
      options: [
        {
          value: '',
          label: `t:sections.${secHandle}.carousel_nav_style.options__1.label`,
        },
        {
          value: 'boxes',
          label: `t:sections.${secHandle}.carousel_nav_style.options__2.label`,
        },
      ],
    },
    {
      type: 'select',
      id: 'carousel_nav_icon',
      default: defaultData.carousel_nav_icon,
      label: `t:sections.${secHandle}.carousel_nav_icon.label`,
      options: [
        {
          value: 'chevron-right',
          label: `t:sections.${secHandle}.carousel_nav_icon.options__1.label`,
        },
        {
          value: 'arrow',
          label: `t:sections.${secHandle}.carousel_nav_icon.options__2.label`,
        },
      ],
    },
  ];
};

module.exports = { carouselNavigationSchema };
