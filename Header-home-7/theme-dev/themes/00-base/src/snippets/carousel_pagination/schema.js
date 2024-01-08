const carouselPaginationSchema = (
  sectionHandle = 'all',
  defaultData = {
    carousel_pag_disabled: false,
    carousel_pag_mobile_disabled: false,
    carousel_pag_align: 'center',
    carousel_pag_style: '',
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
      content: `t:sections.${secHandle}.carousel_pag_heading.label`,
    },
    {
      type: 'checkbox',
      id: 'carousel_pag_disabled',
      default: defaultData.carousel_pag_disabled,
      label: `t:sections.${secHandle}.carousel_pag_disabled.label`,
    },
    {
      type: 'checkbox',
      id: 'carousel_pag_mobile_disabled',
      default: defaultData.carousel_pag_mobile_disabled,
      label: `t:sections.${secHandle}.carousel_pag_mobile_disabled.label`,
    },
    {
      type: 'select',
      id: 'carousel_pag_align',
      default: defaultData.carousel_pag_align,
      label: `t:sections.${secHandle}.carousel_pag_align.label`,
      options: [
        {
          value: 'left',
          label: `t:sections.${secHandle}.carousel_pag_align.options__1.label`,
        },
        {
          value: 'center',
          label: `t:sections.${secHandle}.carousel_pag_align.options__2.label`,
        },
        {
          value: 'right',
          label: `t:sections.${secHandle}.carousel_pag_align.options__3.label`,
        },
      ],
    },
    {
      type: 'select',
      id: 'carousel_pag_style',
      default: defaultData.carousel_pag_style,
      label: `t:sections.${secHandle}.carousel_pag_style.label`,
      options: [
        {
          value: '',
          label: `t:sections.${secHandle}.carousel_pag_style.options__1.label`,
        },
        {
          value: 'sticks',
          label: `t:sections.${secHandle}.carousel_pag_style.options__2.label`,
        },
      ],
    },
  ];
};

module.exports = { carouselPaginationSchema };
