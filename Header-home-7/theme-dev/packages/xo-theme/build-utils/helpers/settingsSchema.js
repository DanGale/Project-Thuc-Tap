const fs = require('fs');
const glob = require('glob');
const { schemaString } = require('./schemaString');

/**
 * Build file config/settings_schema.json
 */
const buildSettingsSchema = (compilation, RawSource, themeDevPath) => {
  const themeSettingsFiles = glob.sync(`${themeDevPath}/config/**/settings.schema.json`);
  const themeSettingsArr = [];
  const themeInfo = fs.readFileSync(`${themeDevPath}/config/theme-info.json`, 'utf8');
  themeSettingsArr.push(JSON.parse(themeInfo));
  themeSettingsFiles.forEach((file) => {
    let folder = file.replace('/settings.schema.json', '').split('/').pop();
    folder = folder.replace(/[\d][\d]-/g, '').replace(/-/g, '_');
    let str = fs.readFileSync(file, 'utf8');
    // replace all "t:" to "t:settings_schema"
    str = str.replace(/t\:/g, `t:settings_schema.${folder}.`);
    themeSettingsArr.push(JSON.parse(str));
  });
  compilation.emitAsset(
    '../config/settings_schema.json',
    new RawSource(JSON.stringify(themeSettingsArr, null, 2)),
  );
};

/**
 * Build file locales/en.default.schema.json
 */
 const buildEnDefaultSchema = (compilation, RawSource, themeDevPath, LANG_SCHEMA) => {
  // Build sectionLocaleSchema
  let sectionFiles = glob.sync(`${themeDevPath}/sections/all/en.schema.json`);
  const sectionGroupFiles = glob.sync(`${themeDevPath}/groups/**/en.schema.json`);
  const sectionInPagesFiles = glob.sync(`${themeDevPath}/pages/**/en.schema.json`);
  let allSectionFiles = [
    ...sectionGroupFiles,
    ...sectionInPagesFiles,
  ];
  if (LANG_SCHEMA != 'base') {
    sectionFiles = glob.sync(`${themeDevPath}/sections/**/en.schema.json`);
  }

  allSectionFiles = [
    ...sectionFiles,
    ...sectionGroupFiles,
    ...sectionInPagesFiles,
  ];
  const componentSchemas = glob.sync(`${themeDevPath}/snippets/**/en.schema.section.json`);
  let sectionLocaleSchema = {};
  allSectionFiles.forEach((file) => {
    const folder = file.replace('/en.schema.json', '').split('/').pop().replace(/-/g, '_');
    let schemaContent = fs.readFileSync(file, 'utf8');
    componentSchemas.forEach((component) => {
      const componentFolder = component.replace('/en.schema.section.json', '').split('/').pop();
      const COMPONENT_FOLDER = `__${componentFolder.toUpperCase().replace(/-/g, '_')}__`;
      // read file, then remove first "{" and last "}"
      const componentContent = fs.readFileSync(component, 'utf8').trim().slice(1, -1);
      schemaContent = schemaContent.replace(`"component": "${COMPONENT_FOLDER}"`, componentContent);
    });
    const str = `{"${folder}": ${schemaContent}}`;
    sectionLocaleSchema = Object.assign(sectionLocaleSchema, JSON.parse(str));
  });

  // Build theme settings schema

  const themeFiles = glob.sync(`${themeDevPath}/config/**/en.schema.json`);
  const themeSchema = schemaString(themeFiles, 'settings');

  const schemaObj = {
    settings_schema: themeSchema,
    sections: sectionLocaleSchema,
  }

  compilation.emitAsset(
    '../locales/en.default.schema.json',
    new RawSource(JSON.stringify(schemaObj, null, 2)),
  );
}

module.exports = { buildSettingsSchema, buildEnDefaultSchema };
