const annoucementSchema = (
  sectionHandle = 'all',
  defaultData = {
    annoucement_bar_link: '/',
    annoucement_bar_text: '<p>text</p>',
  },
  type = 'settings'
) => {
  let secHandle = 'all';
  if (sectionHandle !== 'all') {
    secHandle = `${secHandle}.${type}`;
  }

  return [
    {
      type: "text",
      id: "annoucement_bar_link",
      label: `t:sections.${secHandle}.annoucement_bar_link.label`,
      default: defaultData.annoucement_bar_link,
    },
    {
      type: "richtext",
      id: "annoucement_bar_text",
      label: `t:sections.${secHandle}.annoucement_bar_text.label`,
      default: defaultData.annoucement_bar_text,
    }
  ]
};

module.exports = { annoucementSchema };
