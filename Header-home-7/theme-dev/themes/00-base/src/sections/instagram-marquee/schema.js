const schema = {
  name: 'ts:name',
  settings: [
    {
      type: 'text',
      label: 'ts:settings.token',
      id: 'access_token',
    },
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
      id: 'item_width',
      label: 'ts:settings.item_width',
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
  presets: [
    {
      name: 'ts:presets.name',
    },
  ],
};

module.exports = { schema };
