const schema = {
  name: 'ts:name',
  tag: 'section',
  class: 'section',
  blocks: [
    {
      type: '@app',
    },
    {
      type: 'tag',
      name: 'ts:blocks.tag.name',
      limit: 1,
    },
    {
      type: 'featured_image',
      name: 'ts:blocks.featured_image.name',
      limit: 1,
    },
    {
      type: 'title',
      name: 'ts:blocks.title.name',
      limit: 1,
      settings: [
        {
          type: 'checkbox',
          id: 'blog_show_date',
          default: true,
          label: 'ts:blocks.title.settings.blog_show_date.label',
        },
        {
          type: 'checkbox',
          id: 'blog_show_author',
          default: false,
          label: 'ts:blocks.title.settings.blog_show_author.label',
        },
      ],
    },
    {
      type: 'content',
      name: 'ts:blocks.content.name',
      limit: 1,
    },
    {
      type: 'share',
      name: 'ts:blocks.share.name',
      limit: 2,
      settings: [
        {
          type: 'checkbox',
          id: 'share_icon',
          default: true,
          label: 'ts:blocks.share.share_icon.icon.label',
        },
        {
          type: 'checkbox',
          id: 'show_social_media',
          default: true,
          label: 'ts:blocks.share.share_icon.show_social_media.label',
        },
        {
          type: 'text',
          id: 'share_label',
          label: 'ts:blocks.share.settings.text.label',
          default: 'Share',
        },
        {
          type: 'paragraph',
          content: 'ts:blocks.share.settings.featured_image_info.content',
        },
        {
          type: 'paragraph',
          content: 'ts:blocks.share.settings.title_info.content',
        },
      ],
    },
  ],
  settings: [
    {
      type: 'url',
      id: 'back_url',
      label: 'ts:settings.back_url.label',
    },
  ],
};

module.exports = { schema };
