const { buttonSchema } = require('../../snippets/button/schema');
const { productCardSchema } = require('../../snippets/product-card/schema');
const { annoucementSchema } = require('../../snippets/annoucement-bar/schema');
const { iconBoxSchema } = require('../../snippets/icon-box/schema');
const { videoSchema } = require('../../snippets/video/schema');

const schema = {
  name: 'ts:name',
  tag: 'section',
  class: 'section',
  settings: [
    {
      "type": "image_picker",
      "id": "image_banner",
      "label": "Image"
    },
    ...annoucementSchema(),
    ...buttonSchema(),
    {
      type: 'collection',
      id: 'collection',
      label: 'Collection',
    },
    ...productCardSchema(),
    ...videoSchema(),
  ],
};

module.exports = { schema };
