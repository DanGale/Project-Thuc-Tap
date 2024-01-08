const fs = require('fs');

const schemaString = (files, type) => {
  let dataObj = {};
  files.forEach((file) => {
    let folder = file.replace('/en.schema.json', '').split('/').pop();
    if (type === 'settings') {
      folder = folder.replace(/[\d][\d]-/g, '').replace(/-/g, '_');
    }
    const str = `{"${folder}": ${fs.readFileSync(file, 'utf8')}}`;
    dataObj = Object.assign(dataObj, JSON.parse(str));
  });
  return dataObj;
};

module.exports = { schemaString };
