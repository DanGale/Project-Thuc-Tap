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
      type: 'marquee_text_item',
      name: 'ts:blocks.marquee_text_item.label',
      settings: [
        {
          type: 'text',
          label: 'ts:blocks.marquee_text_item.label',
          id: 'item_text',
        },
        {
          type: 'color',
          id: 'item_color',
          label: 'ts:blocks.marquee_text_item.color',
        },
        {
          type: 'url',
          id: 'item_link',
          label: 'ts:blocks.marquee_text_item.link',
        },
        {
          type: 'range',
          id: 'item_size',
          min: 1.2,
          max: 7,
          step: 0.1,
          label: 'ts:blocks.marquee_text_item.size',
          default: 4,
        },
      ],
    },
  ],
  presets: [
    {
      name: 'ts:presets.name',
      blocks: [
        {
          type: 'marquee_text_item',
          settings: {
            item_text: 'Marquee Item 1',
            item_link: '/',
          },
        },
        {
          type: 'marquee_text_item',
          settings: {
            item_text: 'Marquee Item 2',
            item_link: '/',
          },
        },
        {
          type: 'marquee_text_item',
          settings: {
            item_text: 'Marquee Item 3',
            item_link: '/',
          },
        },
      ],
    },
  ],
};

module.exports = { schema };
