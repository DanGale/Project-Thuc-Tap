const videoSchema = (
  sectionHandle = 'all',
  defaultData = {
    enable_video_looping: 'Shop by category',
    video_url: 'https://www.youtube.com/watch?v=_9VUPq3SxOc'
  },
) => {
  let secHandle = 'all';
  if (sectionHandle !== 'all') {
    secHandle = `${secHandle}.${type}`;
  }

  return [
    {
      "type": "checkbox",
      "id": "enable_video_looping",
      "label": `t:sections.${sectionHandle}.enable_video_looping.label`,
      "default": false
    },
    {
      "type": "video",
      "id": "video",
      "label": `t:sections.${sectionHandle}.video.label`
    },
    {
      "type": "video_url",
      "id": "video_url",
      "accept": ["youtube", "vimeo"],
      "default": defaultData.video_url,
      "label":`t:sections.${sectionHandle}.video_url.label`,
      "info": `t:sections.${sectionHandle}.video_url.label`
    },
    {
      "type": "image_picker",
      "id": "cover_image",
      "label": `t:sections.${sectionHandle}.cover_image.label`
    }
  ]
};

module.exports = { videoSchema };
