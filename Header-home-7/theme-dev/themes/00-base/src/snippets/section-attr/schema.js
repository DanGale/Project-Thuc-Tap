const { sectionBgImageSchema } = require('../section-bg-image/schema');

const sectionAttrSchema = (
  sectionHandle = 'all',
  isBgImage = false,
  defaultData = {
    padding_top: 50,
    padding_bottom: 50,
  },
) => {
  let secHandle = 'all';
  if (sectionHandle !== 'all') {
    secHandle = `${secHandle}.${type}`;
  }

  const bgImageSchema = isBgImage ? sectionBgImageSchema(sectionHandle) : [];

  return [
    {
      type: 'header',
      content: `t:sections.${sectionHandle}.heading.content`
    },
    {
      type: 'color_scheme',
      id: 'color_scheme',
      label: `t:sections.${sectionHandle}.color_scheme.label`,
    },
    {
      type: 'color',
      id: 'background_color',
      label: `t:sections.${sectionHandle}.bg_color.label`,
    },
    {
      type: 'color_background',
      id: 'background_gradient',
      label: `t:sections.${sectionHandle}.bg_gradient.label`,
    },
    ...bgImageSchema,
    {
      type: 'number',
      id: 'padding_top',
      label: `t:sections.${sectionHandle}.padding_top.label`,
      default: defaultData.padding_top,
    },
    {
      type: 'number',
      id: 'padding_bottom',
      label: `t:sections.${sectionHandle}.padding_bottom.label`,
      default: defaultData.padding_bottom,
    },
  ];
};

module.exports = { sectionAttrSchema };
