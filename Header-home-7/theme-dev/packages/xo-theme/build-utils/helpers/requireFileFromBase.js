const fs = require('fs');

/**
 *
 * themeDevPath: '/Users/neo/www/themes/core/core-dev/themes/00-base/src'
 * turboRoot: '/Users/neo/www/themes/core/core-dev'
 */
const requireFileFromBase = (fileDevPath, themeDevPath, turboRoot) => {
  if (themeDevPath.includes('00-base')) {
    return `${themeDevPath}/${fileDevPath}`;
  }
  if (!turboRoot) {
    turboRoot = themeDevPath.split('/').slice(0, -3).join('/');
  }
  if (!fs.existsSync(`${themeDevPath}/${fileDevPath}`)) {
    return `${turboRoot}/themes/00-base/src/${fileDevPath}`;
  }
  return `${themeDevPath}/${fileDevPath}`;
};

module.exports = { requireFileFromBase };
