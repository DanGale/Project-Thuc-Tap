const fs = require('fs');

const localesDefault = (localesFiles) => {
  let localeDataObj = {};
  localesFiles.forEach((file) => {
    const folder = file.replace('.json', '').split('/').pop();
    const aa = folder.replace(/[0-9]*-/g, '').replace(/-/g, '_');
    const str = `{"${aa}": ${fs.readFileSync(file, 'utf8')}}`;
    localeDataObj = Object.assign(localeDataObj, JSON.parse(str));
  });
  return localeDataObj;
};

module.exports = { localesDefault };
