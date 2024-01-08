const schema = {
  name: 'ts:name',
  class: 'section',
  tag: 'section',
  settings: [
    {
      type: 'text',
      id: 'learn_more',
      label: 'ts:settings.learn_more.label',
      default: 'Enter using password',
    },
  ],
  blocks: [
    {
      type: 'banner',
      name: 'ts:settings.blocks.banner.name',
      limit: 1,
      settings: [
        {
          type: 'image_picker',
          id: 'banner',
          label: 'ts:settings.blocks.banner.image.label',
        },
        {
          type: 'text',
          id: 'banner_heading',
          label: 'ts:settings.blocks.banner.heading.label',
          default: 'Heading',
        },
      ],
    },
    {
      type: 'content_description',
      name: 'ts:settings.blocks.content_description.name',
      limit: 1,
      settings: [
        {
          type: 'text',
          id: 'title',
          label: 'ts:settings.blocks.content_description.title.label',
          default: 'Title',
        },
        {
          type: 'textarea',
          id: 'description',
          label: 'ts:settings.blocks.content_description.description.label',
          default: 'Description',
        },
      ],
    },
    {
      type: 'input_email',
      name: 'ts:settings.blocks.input_email.name',
      limit: 1,
      settings: [
        {
          type: 'text',
          id: 'place_holder',
          label: 'ts:settings.blocks.input_email.place_holder.label',
          default: 'Placeholder',
        },
        {
          type: 'text',
          id: 'button_submit',
          label: 'ts:settings.blocks.input_email.button_submit.label',
          default: 'Subscribe',
        },
      ],
    },
  ],
};

module.exports = { schema };
