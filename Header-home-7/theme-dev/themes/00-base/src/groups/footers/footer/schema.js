const schema = {
  name: 't:sections.footer.name',
  class: 'section-footer',
  blocks: [
    {
      type: '@app',
    },
    {
      type: 'link_list',
      name: 't:sections.footer.blocks.link_list.name',
      settings: [
        {
          type: 'inline_richtext',
          id: 'heading',
          default: 'Quick links',
          label: 't:sections.footer.blocks.link_list.settings.heading.label',
        },
        {
          type: 'link_list',
          id: 'menu',
          default: 'footer',
          label: 't:sections.footer.blocks.link_list.settings.menu.label',
          info: 't:sections.footer.blocks.link_list.settings.menu.info',
        },
      ],
    },
    {
      type: 'text',
      name: 't:sections.footer.blocks.text.name',
      settings: [
        {
          type: 'inline_richtext',
          id: 'heading',
          default: 'Heading',
          label: 't:sections.footer.blocks.text.settings.heading.label',
        },
        {
          type: 'richtext',
          id: 'subtext',
          default: '<p>Share contact information, store details, and brand content with your customers.</p>',
          label: 't:sections.footer.blocks.text.settings.subtext.label',
        },
      ],
    },
    {
      type: 'logo',
      name: 'Logo',
      settings: [
        {
          type: 'image_picker',
          id: 'image',
          label: 'Image',
        },
        {
          type: 'range',
          id: 'image_width',
          min: 50,
          max: 550,
          step: 5,
          unit: 'px',
          label: 'Image width',
          default: 100,
        }
      ],
    },
  ],
  settings: [
    {
      type: 'range',
      id: 'collumn',
      min: 3,
      max: 6,
      step: 1,
      unit: 'col',
      label: 'Number of collumn in row',
      default: 3,
    },
    {
      type: 'header',
      content: 't:sections.footer.settings.header__1.content',
      info: 't:sections.footer.settings.header__1.info',
    },
    {
      type: 'checkbox',
      id: 'newsletter_enable',
      default: true,
      label: 't:sections.footer.settings.newsletter_enable.label',
    },
    {
      type: 'inline_richtext',
      id: 'newsletter_heading',
      default: 'Subscribe to our emails',
      label: 't:sections.footer.settings.newsletter_heading.label',
    },
    {
      type: 'header',
      content: 't:sections.footer.settings.header__2.content',
      info: 't:sections.footer.settings.header__2.info',
    },
    {
      type: 'checkbox',
      id: 'show_social',
      default: true,
      label: 't:sections.footer.settings.show_social.label',
    },
    {
      type: 'header',
      content: 't:sections.footer.settings.header__3.content',
      info: 't:sections.footer.settings.header__3.info',
    },
    {
      type: 'checkbox',
      id: 'enable_country_selector',
      default: true,
      label: 't:sections.footer.settings.enable_country_selector.label',
    },
    {
      type: 'header',
      content: 't:sections.footer.settings.header__5.content',
      info: 't:sections.footer.settings.header__5.info',
    },
    {
      type: 'checkbox',
      id: 'enable_language_selector',
      default: true,
      label: 't:sections.footer.settings.enable_language_selector.label',
    },
    {
      type: 'header',
      content: 't:sections.footer.settings.header__7.content',
    },
    {
      type: 'checkbox',
      id: 'payment_enable',
      default: true,
      label: 't:sections.footer.settings.payment_enable.label',
    },
  ],
  default: {
    blocks: [
      {
        type: 'link_list',
      },
      {
        type: 'text',
      },
    ],
  },
};

module.exports = { schema };
