const fs = require('fs');
const { scss2css } = require('./scss2css');
const { buildSchemaInLiquid } = require('./watch');

/**
 *
 * @param {*} sectionLocaleSchema hàm mutate biến này gắn string vào
 */
const watchSectionLiquid = (compilation, RawSource, filePath, themeDevPath, LANG_SCHEMA) => {
  const file = `${filePath}\\en.schema.json`;
  let folder = file.replace('\\en.schema.json', '').split('\\').pop();
  const liquidFile = file.replace('\\en.schema.json', `\\${folder}.liquid`);
  const schemaFile = file.replace('\\en.schema.json', `\\schema.js`);
  const inlineJSFile = file.replace('\\en.schema.json', `\\${folder}.script-internal.js`);

  // build section liquid
  if (fs.existsSync(liquidFile)) {
    let liquidFinal = fs.readFileSync(liquidFile, 'utf8');
    const config = {
      sectionAttr: false,
      sectionBgImage: false,
    };

    // Check component section-attr
    if (liquidFinal.includes('render \'section-attr\'')) {
      config.sectionAttr = true;
    }
    if (liquidFinal.includes('render \'section-bg-image\'')) {
      config.sectionBgImage = true;
    }

    const schemaInLiquid = buildSchemaInLiquid({ schemaFile, folder, themeDevPath, config, LANG_SCHEMA });

    if (fs.existsSync(inlineJSFile)) {
      const inlineJS = fs.readFileSync(inlineJSFile, 'utf8');
      liquidFinal += `
{% javascript %}
${inlineJS}
{% endjavascript %}
`;
    }
    liquidFinal += `
{% schema %}
${schemaInLiquid}
{% endschema %}
`;
    compilation.emitAsset(`../sections/${folder}.liquid`, new RawSource(liquidFinal));
  }
};

const watchSectionSCSS = (compilation, RawSource, filePath, dirName) => {
  const file = `${filePath}\\en.schema.json`;
  let folder = file.replace('\\en.schema.json', '').split('\\').pop();
  const sassFile = file.replace('\\en.schema.json', `\\section-${folder}.scss`);
  if (fs.existsSync(sassFile)) {
    const css = scss2css(dirName, sassFile);
    compilation.emitAsset(`../assets/section-${folder}.css`, new RawSource(css));
  }
};

module.exports = {
  watchSectionLiquid,
  watchSectionSCSS,
};
