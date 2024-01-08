const sectionHeadingSchema = (
  sectionHandle = 'all',
  defaultData = {
    title: 'Section title',
    align: 'left',
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
      id: 'heading_title',
      label: `t:sections.${secHandle}.title.label`,
      default: defaultData.title,
    },
    {
      type: 'richtext',
      id: 'heading_description',
      label: `t:sections.${secHandle}.description.label`,
    },
    {
      type: 'select',
      id: 'heading_align',
      label: `t:sections.${secHandle}.align.label`,
      default: defaultData.align,
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
    },
  ];
};

module.exports = { sectionHeadingSchema };
