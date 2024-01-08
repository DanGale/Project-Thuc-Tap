const { paddingTopBottom, bgDesktopMobile } = require("../../common/schema");

const schema = {
  name: "ts:name",
  tag: "section",
  class: "spaced-section",
  settings: [
    {
      type: "checkbox",
      id: "include_margins",
      default: true,
      label: "ts:settings.include_margins.label"
    },
		...bgDesktopMobile,
    ...paddingTopBottom(36, 36),
  ],
  blocks: [
    {
      type: "@app"
    }
  ],
  presets: [
    {
      name: "ts:presets.name"
    }
  ]
};

module.exports = { schema };
