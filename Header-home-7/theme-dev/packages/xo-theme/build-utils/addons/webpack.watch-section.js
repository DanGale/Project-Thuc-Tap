const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { localesDefault } = require('../helpers/localesDefault');
const { buildSettingsData } = require('../helpers/settingsData');
const { watchSectionLiquid, watchSectionSCSS, watchSingleSCSS, buildAllSingleSCSS } = require('../helpers/watch');
// TODO: check processSectionLiquid & watchSectionLiquid
const processSectionLiquid = require('../helpers/processSectionLiquid');
const { buildSettingsSchema, buildEnDefaultSchema } = require('../helpers/settingsSchema');

class WatchSectionPlugin {
  constructor(options = {}) {
    this.options = options;
    this.options.turboRoot = options.dirName.replace(/\/themes\/[^/]+$/, '').replace(/\/clients\/[^/]+$/, '');
  }

  apply(compiler) {
    const { webpack } = compiler;
    const { Compilation } = webpack;
    const { RawSource } = webpack.sources;
    let sectionFileChange = '';
    let isSettingsSchema = true;
    let isSettingsData = true;
    let isLocalesDefault = true;
    let singleSCSSFile = '';
    let isFirstRun = true;

    compiler.hooks.thisCompilation.tap('WatchSectionPlugin', (compilation) => {

      if (isFirstRun) {
        console.log('==============FIRST RUN==============');
        // Build sections
        const sectionFiles = glob.sync(`${this.options.dirName}/src/sections/**/en.schema.json`);
        sectionFiles.forEach((file) => {
          processSectionLiquid(compilation, RawSource, file, this.options);
        });
        const sectionInGroupFiles = glob.sync(`${this.options.dirName}/src/groups/**/en.schema.json`);
        sectionInGroupFiles.forEach((file) => {
          processSectionLiquid(compilation, RawSource, file, this.options);
        });
        const sectionInPageFiles = glob.sync(`${this.options.dirName}/src/pages/**/en.schema.json`);
        sectionInPageFiles.forEach((file) => {
          processSectionLiquid(compilation, RawSource, file, this.options);
        });
        // Build en.default.schema.json
        buildEnDefaultSchema(compilation, RawSource, this.options.dirName + '/src', this.options.LANG_SCHEMA);
        // Build all single scss files
        buildAllSingleSCSS(compilation, RawSource, this.options.dirName);
        isFirstRun = false;
      }

      compiler.hooks.watchRun.tap('WatchSectionPlugin', (compilation) => {
        if (compilation.modifiedFiles) {
          const changedFiles = Array.from(compilation.modifiedFiles, (file) => file);
          for (let i = 0; i < changedFiles.length; i++) {
            if (
              changedFiles[i].includes('src/sections/') ||
              changedFiles[i].includes('src/groups/') ||
              // changedFiles[i].match(/src\/sections-[a-z]*\//g) ||
              (changedFiles[i].includes('src/pages/') && !changedFiles[i].includes('snippets'))
            ) {
              sectionFileChange = changedFiles[i];
            }
            if (changedFiles[i].includes('src/config/') && changedFiles[i].includes('settings.schema.json')) {
              isSettingsSchema = true;
            }
            if (changedFiles[i].includes('src/config/') && changedFiles[i].includes('settings_data')) {
              isSettingsData = true;
            }
            if (
              changedFiles[i].includes('src/locales/') ||
              (changedFiles[i].includes('src/config/') && changedFiles[i].includes('en.schema.json'))
            ) {
              isLocalesDefault = true;
            }
            if (
              changedFiles[i].includes('src/styles/single/') ||
              (changedFiles[i].includes('groups') && changedFiles[i].includes('.scss') && !changedFiles[i].includes('.global')) ||
              (changedFiles[i].includes('snippet') && changedFiles[i].includes('.scss') && !changedFiles[i].includes('.global'))
            ) {
              singleSCSSFile = changedFiles[i];
            }
          }
        }
      });

      // Tapping to the assets processing pipeline on a specific stage.
      compilation.hooks.processAssets.tap(
        {
          name: 'WatchSectionPlugin',

          // Using one of the later asset processing stages to ensure
          // that all assets were already added to the compilation by other plugins.
          stage: Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE,
        },
        () => {
          const themeDevPath = this.options.dirName + '/src';
          // Process sections folder
          if (sectionFileChange !== '') {
            const folderChange = path.dirname(sectionFileChange);
            const fileNameChange = path.basename(sectionFileChange);

            if (fileNameChange === 'en.schema.json') {
              buildEnDefaultSchema(compilation, RawSource, themeDevPath, this.options.LANG_SCHEMA);
            } else if (fileNameChange.includes('.scss')) {
              watchSectionSCSS(compilation, RawSource, folderChange, this.options.dirName);
            } else if (fileNameChange.includes('.script-external') || fileNameChange.includes('.script-global')) {
              // do nothing
            } else {
              watchSectionLiquid(compilation, RawSource, folderChange, themeDevPath, this.options.LANG_SCHEMA);
            }

            sectionFileChange == '';
          }

          if (singleSCSSFile !== '') {
            watchSingleSCSS(compilation, RawSource, singleSCSSFile, this.options.dirName);
            singleSCSSFile = '';
          }

          // Process config folder
          if (isSettingsSchema) {
            // config/settings_schema.json
            buildSettingsSchema(compilation, RawSource, themeDevPath);
            isSettingsSchema = false;
          }

          if (isSettingsData) {
            buildSettingsData(compilation, RawSource, themeDevPath);
            isSettingsData = false;
          }

          // Process locales/en.default.json
          if (isLocalesDefault) {
            const langDefault = this.options.DEFAULT_LANGUAGE || 'en';
            const localesFiles = glob.sync(`${themeDevPath}/locales/*.json`);
            let localeDataObj = localesDefault(localesFiles);
            const enDefault = JSON.stringify(localeDataObj, null, 2).replace(/\//g, '\\\/');
            compilation.emitAsset(`../locales/${langDefault}.default.json`, new RawSource(enDefault));
            isLocalesDefault = false;
          }
        }
      );
    });
  }
}

module.exports = { WatchSectionPlugin };
