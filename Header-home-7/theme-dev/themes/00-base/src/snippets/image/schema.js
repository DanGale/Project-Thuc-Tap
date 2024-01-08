const imageSchema = (
  sectionHandle = 'all',
  defaultData = {
    class: '',
    lazyload: true,
    attrs: '',
  },
) => {
  return [
    {
      type: 'image_picker',
      id: 'image',
      label: `t:sections.${sectionHandle}.settings.image.label`,
    },
    {
      type: 'text',
      id: 'class',
      label: `t:sections.${sectionHandle}.settings.class.label`,
      default: defaultData.class,
    },
    {
      type: 'checkbox',
      id: 'lazyload',
      label: `t:sections.${sectionHandle}.settings.lazyload.label`,
      default: defaultData.lazyload,
    },
    {
      type: 'text',
      id: 'attrs',
      label: `t:sections.${sectionHandle}.settings.attrs.label`,
      default: defaultData.attrs,
    },
  ];
};

module.exports = { imageSchema };
