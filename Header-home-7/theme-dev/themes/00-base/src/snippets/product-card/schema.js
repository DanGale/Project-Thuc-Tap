const productCardSchema = (
  sectionHandle = 'all',
  defaultData = {
    product_card_show_image: true,
    product_card_show_secondary_image: true,
    product_card_show_vendor: false,
    product_card_show_description: false,
    product_card_show_quick_add: true,
    product_card_show_quick_view: true,
    product_card_show_price: true,
    product_card_show_badge: false,
    product_card_aspect_ratio: '3/4',
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
      content: `t:sections.${secHandle}.product_card_heading.content`,
    },
    {
      type: 'checkbox',
      id: 'product_card_show_image',
      default: defaultData.product_card_show_image,
      label: `t:sections.${secHandle}.product_card_show_image.label`,
    },
    {
      type: 'checkbox',
      id: 'product_card_show_secondary_image',
      default: defaultData.product_card_show_secondary_image,
      label: `t:sections.${secHandle}.product_card_show_secondary_image.label`,
    },
    {
      type: 'checkbox',
      id: 'product_card_show_vendor',
      default: defaultData.product_card_show_vendor,
      label: `t:sections.${secHandle}.product_card_show_vendor.label`,
    },
    {
      type: 'checkbox',
      id: 'product_card_show_description',
      label: `t:sections.${secHandle}.product_card_show_description.label`,
      default: defaultData.product_card_show_description,
    },
    {
      type: 'checkbox',
      id: 'product_card_show_quick_add',
      label: `t:sections.${secHandle}.product_card_show_quick_add.label`,
      default: defaultData.product_card_show_quick_add,
    },
    {
      type: 'checkbox',
      id: 'product_card_show_quick_view',
      label: `t:sections.${secHandle}.product_card_show_quick_view.label`,
      default: defaultData.product_card_show_quick_view,
    },
    {
      type: 'checkbox',
      id: 'product_card_show_price',
      label: `t:sections.${secHandle}.product_card_show_price.label`,
      default: defaultData.product_card_show_price,
    },
    {
      type: 'checkbox',
      id: 'product_card_show_badge',
      label: `t:sections.${secHandle}.product_card_show_badge.label`,
      default: defaultData.product_card_show_badge,
    },
    {
      type: 'text',
      id: 'product_card_aspect_ratio',
      label: `t:sections.${secHandle}.product_card_aspect_ratio.label`,
      default: defaultData.product_card_aspect_ratio,
    },
    {
      type: 'color_scheme',
      id: 'card_color_scheme',
      label: `t:sections.${secHandle}.card_color_scheme.label`,
    },
  ];
};

module.exports = { productCardSchema };
