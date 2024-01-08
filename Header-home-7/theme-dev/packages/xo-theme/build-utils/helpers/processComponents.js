const fs = require('fs');
const glob = require('glob');

const processComponents = (liquidFile, themeDevPath) => {
  let liquidFinal = fs.readFileSync(liquidFile, 'utf8');

  //  Process replace component data
  const componentSchemas = glob.sync(`${themeDevPath}/snippets/**/en.schema.component.json`);
  componentSchemas.forEach((component) => {
    const componentFolder = component.replace('/en.schema.component.json', '').split('/').pop();
    const componentLiquid = component.replace('/en.schema.component.json', `/${componentFolder}.liquid`);
    const COMPONENT_FOLDER = `__${componentFolder.toUpperCase().replace(/-/g, '_')}__`;
    const COMPONENT_FOLDER_BLOCK = `__${componentFolder.toUpperCase().replace(/-/g, '_')}_BLOCK__`;
    // read file, then remove first "{" and last "}"
    const componentContent = fs.readFileSync(componentLiquid, 'utf8');
    // replace all 'section.settings' to 'block.settings' in componentContent
    const componentContentBlock = componentContent.replace(/section.settings/g, 'block.settings');

    const COMPONENT_FOLDER_REG = new RegExp(COMPONENT_FOLDER, 'g');
    liquidFinal = liquidFinal.replace(COMPONENT_FOLDER_REG, componentContent);
    const COMPONENT_FOLDER_BLOCK_REG = new RegExp(COMPONENT_FOLDER_BLOCK, 'g');
    liquidFinal = liquidFinal.replace(COMPONENT_FOLDER_BLOCK_REG, componentContentBlock);
  });

  return liquidFinal;
}

module.exports = { processComponents };
