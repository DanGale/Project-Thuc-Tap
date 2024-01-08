const sectionBgImageSchema = (
  sectionHandle = 'all',
  defaultData = {
    background_image_desktop: '',
    background_image_mobile: '',
    use_parallax: true,
  },
) => {
  let secHandle = 'all';
  if (sectionHandle !== 'all') {
    secHandle = `${secHandle}.${type}`;
  }

  return [
    {
      type: 'image_picker',
      id: 'background_image_desktop',
      label: `t:sections.${sectionHandle}.background_image_desktop.label`,
    },
    {
      type: 'image_picker',
      id: 'background_image_mobile',
      label: `t:sections.${sectionHandle}.background_image_mobile.label`,
      default: defaultData.background_gradient,
    },
    {
      type: 'checkbox',
      id: 'use_parallax',
      label: `t:sections.${sectionHandle}.use_parallax.label`,
      default: defaultData.use_parallax,
    },
  ];
};

module.exports = { sectionBgImageSchema };
