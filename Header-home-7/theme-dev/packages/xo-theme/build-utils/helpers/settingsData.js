const fs = require('fs');
const glob = require('glob');

/**
 * Build file config/settings_schema.json
 */
const buildSettingsData = (compilation, RawSource, themeDevPath) => {
  const themeSettingsFiles = glob.sync(`${themeDevPath}/config/settings_data.preset-*.json`);
  let themeSettingsData = {};
  const themeInfo = fs.readFileSync(`${themeDevPath}/config/settings_data.json`, 'utf8');
  themeSettingsData = JSON.parse(themeInfo);

  let presetData = {};
  themeSettingsFiles.forEach((file) => {
    let str = fs.readFileSync(file, 'utf8');
    presetData = {
      ...presetData,
      ...JSON.parse(str),
    };
  });
  themeSettingsData.presets = presetData;
  const settingsDataStr = JSON.stringify(themeSettingsData, null, 2).replace(/\//g, '\\\/');
  compilation.emitAsset(
    '../config/settings_data.json',
    new RawSource(settingsDataStr),
  );
};

module.exports = { buildSettingsData };
