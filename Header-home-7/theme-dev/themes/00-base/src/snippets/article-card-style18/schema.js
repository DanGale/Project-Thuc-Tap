const articleCardSchema18 = (
  sectionHandle = 'all',
  defaultData = {
    article_card_show_image: true,
    article_card_show_date: true,
    article_card_show_excerpt: false,
    article_card_show_tags: false,
    article_card_media_aspect_ratio: '3/4',
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
      content: `t:sections.${secHandle}.article_card_header.content`,
    },
    {
      type: 'checkbox',
      id: 'article_card_show_image',
      default: defaultData.article_card_show_image,
      label: `t:sections.${secHandle}.article_card_show_image.label`,
      info: `t:sections.${secHandle}.article_card_show_image.label`,
    },
    {
      type: 'checkbox',
      id: 'article_card_show_date',
      default: defaultData.article_card_show_date,
      label: `t:sections.${secHandle}.article_card_show_date.label`,
    },
    {
      type: 'checkbox',
      id: 'article_card_show_excerpt',
      default: defaultData.article_card_show_excerpt,
      label: `t:sections.${secHandle}.article_card_show_excerpt.label`,
    },
    {
      type: 'checkbox',
      id: 'article_card_show_tags',
      default: defaultData.article_card_show_tags,
      label: `t:sections.${secHandle}.article_card_show_tags.label`,
    },
    {
      type: 'text',
      id: 'article_card_media_aspect_ratio',
      default: defaultData.article_card_media_aspect_ratio,
      label: `t:sections.${secHandle}.article_card_media_aspect_ratio.label`,
    },
  ];
};

module.exports = { articleCardSchema18 };
