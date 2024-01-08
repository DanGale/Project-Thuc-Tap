const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { scss2css } = require('./scss2css');
const { requireFileFromBase } = require('./requireFileFromBase');

function getNestedValue(obj, key) {
  const keys = key.split('.');
  let value = obj;
  for (const k of keys) {
    value = value[k];
    if (value === undefined) {
      return undefined; // Return undefined if any part of the key is missing
    }
  }
  return value;
}

function replaceValues(obj, replacements) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      if (obj[key].startsWith('ts:')) {
        const replacementKey = obj[key].substring(3);
        const replacementValue = getNestedValue(replacements, replacementKey);
        if (replacementValue !== undefined) {
          obj[key] = replacementValue;
        }
      }
    } else if (typeof obj[key] === 'object') {
      replaceValues(obj[key], replacements);
    }
  }
}

const buildSchemaInLiquid = ({ schemaFile, folder, themeDevPath, config, LANG_SCHEMA }) => {
  const { schema } = require(schemaFile);
  // delete require.cache
  delete require.cache[require.resolve(schemaFile)];

  // Process section-attr
  if (config.sectionAttr) {
    const schemaSectionAttrFile = requireFileFromBase('snippets/section-attr/schema.js', themeDevPath);
    const { sectionAttrSchema } = require(schemaSectionAttrFile);
    let extraSettings = sectionAttrSchema();
    if (config.sectionBgImage) {
      extraSettings = sectionAttrSchema('all', true);
    }
    // merge schema with sectionAttrSchema
    if (schema.settings) {
      schema.settings.push(...extraSettings);
    } else {
      schema.settings = extraSettings;
    }
  }

  if (LANG_SCHEMA === 'base') {
    const enSchemaFile = schemaFile.replace('schema.js', 'en.schema.json');
    let enSchemaContent = fs.readFileSync(enSchemaFile, 'utf8');
    const replacements = JSON.parse(enSchemaContent);
    replaceValues(schema, replacements);
  }

  const schemaInLiquid = JSON.stringify(schema, null, 2)
    .replace(/tall\:/g, "t:sections.all.")
    .replace(/ts\:/g, `t:sections.${folder.replace(/-/g, '_')}.`)
    .replace(/\[\]/g, "\[\n\n  \]");

  return schemaInLiquid;
}

/**
 *
 * @param {*} sectionLocaleSchema hàm mutate biến này gắn string vào
 *
 * filePath: '/Users/neo/www/themes/core/core-dev/themes/00-base/src/pages/404/main-404',
 * themeDevPath: '/Users/neo/www/themes/core/core-dev/themes/00-base/src'
 */
const watchSectionLiquid = (compilation, RawSource, filePath, themeDevPath, LANG_SCHEMA) => {
  const file = `${filePath}/en.schema.json`;
  let folder = file.replace('/en.schema.json', '').split('/').pop();
  const liquidFile = file.replace('/en.schema.json', `/${folder}.liquid`);
  const schemaFile = file.replace('/en.schema.json', `/schema.js`);
  const inlineJSFile = file.replace('/en.schema.json', `/${folder}.script-internal.js`);
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

    const schemaInLiquid = buildSchemaInLiquid({ schemaFile, folder, themeDevPath, config, LANG_SCHEMA }); //! LANG_SCHEMA
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
  const file = `${filePath}/en.schema.json`;
  let folder = file.replace('/en.schema.json', '').split('/').pop();
  const sassFile = file.replace('/en.schema.json', `/section-${folder}.scss`);
  if (fs.existsSync(sassFile)) {
    const css = scss2css(dirName, sassFile);
    compilation.emitAsset(`../assets/section-${folder}.css`, new RawSource(css));
  }
};

const watchSingleSCSS = (compilation, RawSource, filePath, dirName) => {
  const fileName = path.basename(filePath).replace('.scss', '');
  const css = scss2css(dirName, filePath);
  compilation.emitAsset(`../assets/${fileName}.css`, new RawSource(css));
};

const buildAllSingleSCSS = (compilation, RawSource, dirName) => {
  const singleSCSS1 = glob.sync(`${dirName}/src/styles/single/**/*.scss`);
  singleSCSS1.forEach((file) => {
    watchSingleSCSS(compilation, RawSource, file, dirName);
  });

  const singleSCSS3 = glob.sync(`${dirName}/src/pages/*/snippets/**/*.scss`, {"ignore":['**/*.global.scss']});
  singleSCSS3.forEach((file) => {
    watchSingleSCSS(compilation, RawSource, file, dirName);
  });

  const singleSCSS4 = glob.sync(`${dirName}/src/snippets/**/*.scss`, {"ignore":['**/*.global.scss']});
  singleSCSS4.forEach((file) => {
    watchSingleSCSS(compilation, RawSource, file, dirName);
  });

  const singleSCSS5 = glob.sync(`${dirName}/src/groups/**/*.scss`, {"ignore":['**/*.global.scss']});
  singleSCSS5.forEach((file) => {
    watchSingleSCSS(compilation, RawSource, file, dirName);
  });
};

module.exports = {
  watchSectionLiquid,
  watchSectionSCSS,
  buildSchemaInLiquid,
  watchSingleSCSS,
  buildAllSingleSCSS,
};
