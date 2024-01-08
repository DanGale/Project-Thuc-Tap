const iconBoxSchema = (
  sectionHandle = 'all',
  defaultData = {
    title: 'Title',
    description: '<p>Description</p>',
    align: 'center',
  },
  type = 'settings',
) => {
  let secHandle = 'all';
  if (sectionHandle !== 'all') {
    secHandle = `${secHandle}.${type}`;
  }

  return [
    {
      type: 'select',
      id: 'icon',
      label: `t:sections.${secHandle}.icon.label`,
      options: [
        {
          value: '3d-model',
          label: '3D Model',
        },
        {
          value: 'account',
          label: 'Account',
        },
        {
          value: 'arrow',
          label: 'Arrow',
        },
        {
          value: 'chevron-up',
          label: 'Chevron Up',
        },
        {
          value: 'chevron-down',
          label: 'Chevron Down',
        },
        {
          value: 'chevron-left',
          label: 'Chevron Left',
        },
        {
          value: 'chevron-right',
          label: 'Chevron Right',
        },
        {
          value: 'cart-empty',
          label: 'Cart Empty',
        },
        {
          value: 'cart',
          label: 'Cart',
        },
      ],
    },
    {
      type: 'image_picker',
      id: 'image',
      label: `t:sections.${secHandle}.image.label`,
    },
    {
      type: 'text',
      id: 'title',
      label: `t:sections.${secHandle}.title.label`,
      default: defaultData.title,
    },
    {
      type: 'richtext',
      id: 'description',
      label: `t:sections.${secHandle}.description.label`,
      default: defaultData.description,
    },
    {
      type: 'select',
      id: 'align',
      label: `t:sections.${secHandle}.align.label`,
      options: [
        {
          value: 'left',
          label: `t:sections.${secHandle}.align.option__1.label`,
        },
        {
          value: 'center',
          label: `t:sections.${secHandle}.align.option__2.label`,
        },
        {
          value: 'right',
          label: `t:sections.${secHandle}.align.option__3.label`,
        },
      ],
      default: defaultData.align,
    },
  ];
};

module.exports = { iconBoxSchema };
