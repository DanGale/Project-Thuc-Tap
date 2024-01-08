const schema = {
  name: 'ts:name',
  settings: [
    {
      type: 'range',
      id: 'item_space',
      min: 1,
      max: 10,
      step: 0.5,
      unit: 'rem',
      label: 'ts:settings.space',
      default: 4,
    },
    {
      type: 'number',
      id: 'marquee_height',
      label: 'ts:settings.marquee_height',
      default: 300,
    },
    {
      type: 'range',
      id: 'marquee_speed',
      min: 1,
      max: 10,
      step: 1,
      label: 'ts:settings.speed',
      default: 4,
    },
    {
      type: 'checkbox',
      id: 'stop_marquee',
      label: 'ts:settings.marquee_stop',
      default: false,
    },
    {
      type: 'checkbox',
      id: 'marquee_right_to_left',
      label: 'ts:settings.marquee_right_to_left',
      default: false,
    },
  ],
  blocks: [
    {
      type: 'marquee_image_item',
      name: 'ts:blocks.marquee_image_item.label',
      settings: [
        {
          type: 'image_picker',
          id: 'item_image',
          label: 'ts:blocks.marquee_image_item.label',
        },
        {
          type: 'url',
          id: 'item_link',
          label: 'ts:blocks.marquee_image_item.link',
        },
      ],
    },
  ],
  presets: [
    {
      name: 'ts:presets.name',
      blocks: [
        {
          type: 'marquee_image_item',
          settings: {
            item_link: '/',
          },
        },
      ],
    },
  ],
};

module.exports = { schema };
