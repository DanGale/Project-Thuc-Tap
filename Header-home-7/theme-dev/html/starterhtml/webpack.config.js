const webpackConfig = require('@xo/html');
const { merge } = require('webpack-merge');

const developmentConfig = { mode: 'development' };

module.exports = (env, args) => {
  return merge(webpackConfig(__dirname), developmentConfig);
};
