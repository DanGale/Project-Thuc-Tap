const colorSchema = {
  type: "select",
  id: "color_scheme",
  options: [
    {
      value: "accent-1",
      label: "t:sections.all.colors.accent_1.label"
    },
    {
      value: "accent-2",
      label: "t:sections.all.colors.accent_2.label"
    },
    {
      value: "background-1",
      label: "t:sections.all.colors.background_1.label"
    },
    {
      value: "background-2",
      label: "t:sections.all.colors.background_2.label"
    },
    {
      value: "inverse",
      label: "t:sections.all.colors.inverse.label"
    }
  ],
  default: "background-1",
  label: "t:sections.all.colors.label"
};

const headingSize = {
  type: "select",
  id: "heading_size",
  options: [
    {
      value: "h2",
      label: "t:sections.all.heading_size.options__1.label"
    },
    {
      value: "h1",
      label: "t:sections.all.heading_size.options__2.label"
    },
    {
      value: "h0",
      label: "t:sections.all.heading_size.options__3.label"
    }
  ],
  default: "h1",
  label: "t:sections.all.heading_size.label"
};

module.exports = {
  colorSchema,
  headingSize,
};
