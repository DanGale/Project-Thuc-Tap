const schema = {
  name: 'ts:name',
  settings: [],
  blocks: [
    {
      name: 'ts:blocks.slide.label',
      type: 'testimonial-slide',
      settings: [
        {
          type: 'image_picker',
          id: 'image',
          label: 'ts:blocks.slide.settings.image.label',
        },
        {
          type: 'text',
          id: 'comment',
          label: 'ts:blocks.slide.settings.comment.label',
        },
        {
          type: 'richtext',
          id: 'content',
          label: 'ts:blocks.slide.settings.content.label',
        },
        {
          type: 'image_picker',
          id: 'author_image',
          label: 'ts:blocks.slide.settings.author_image.label',
        },
        {
          type: 'text',
          id: 'author_name',
          label: 'ts:blocks.slide.settings.author_name.label',
        },
        {
          type: 'text',
          id: 'author_job',
          label: 'ts:blocks.slide.settings.author_job.label',
        },
      ],
    },
  ],
  presets: [
    {
      name: 'ts:presets.name',
      blocks: [
        {
          type: 'testimonial-slide',
          settings: {
            comment: 'Testimonial slide comment 1',
            content: '<p>Testimonial slide content 1</p>',
            author_name: 'Author 1',
            author_job: 'Author Job 1',
          },
        },
        {
          type: 'testimonial-slide',
          settings: {
            comment: 'Testimonial slide comment 2',
            content: '<p>Testimonial slide content 2</p>',
            author_name: 'Author 2',
            author_job: 'Author Job 2',
          },
        },
      ],
    },
  ],
};

module.exports = { schema };
