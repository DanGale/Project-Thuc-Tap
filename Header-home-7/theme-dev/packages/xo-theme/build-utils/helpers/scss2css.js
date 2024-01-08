const fs = require('fs');
const sass = require('sass');

const scss2css = (dirName, sassFile) => {
  // console.log('dirName', dirName, sassFile);
  const themeDevFolder = dirName.replace(/\\/g, "\/").replace(/\/themes\/[^/]+$/, '').replace(/\/clients\/[^/]+$/, '');
  const sassString = `@import "${themeDevFolder}/html/basehtml/src/styles/abstracts/functions";
@import "${themeDevFolder}/html/basehtml/src/styles/abstracts/media";
@import "${themeDevFolder}/html/basehtml/src/styles/abstracts/createVariables";
@import "${themeDevFolder}/html/basehtml/src/styles/abstracts/direction";
@import "${themeDevFolder}/html/basehtml/src/styles/abstracts/pfs";
` + fs.readFileSync(sassFile, 'utf8');
  fs.writeFileSync(`${themeDevFolder}/tmp.scss`, sassString);
  const result = sass.compile(`${themeDevFolder}/tmp.scss`, { style: 'expanded' });
  const css = result.css.toString();
  return css;
}

module.exports = { scss2css };
