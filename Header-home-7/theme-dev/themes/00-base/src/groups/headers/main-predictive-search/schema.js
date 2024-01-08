const schema = {
  name: 'ts:name',
  class: 'section-predictive-search',
  settings: [
    {
      type: 'color_scheme',
      id: 'color_scheme',
      label: `ts:settings.color_scheme.label`,
    },
    {
      type: 'color',
      id: 'background_color',
      label: `ts:settings.bg_color.label`,
    },
    {
      type: 'color_background',
      id: 'background_gradient',
      label: `ts:settings.bg_gradient.label`,
    },
    {
      type: 'number',
      id: 'padding_top',
      label: `ts:settings.padding_top.label`,
    },
    {
      type: 'number',
      id: 'padding_bottom',
      label: `ts:settings.padding_bottom.label`,
    },
    {
      type: 'link_list',
      id: 'search_tag',
      default: 'main-menu',
      label: 'Search list',
    },
  ],
};

module.exports = { schema };
