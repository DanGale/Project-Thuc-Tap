const webpackConfig = require('@xo/html');
const { merge } = require('webpack-merge');

const developmentConfig = { mode: 'development' };

const htmlFiles = [
  {
    filename: 'about.html',
    template: './src/html/about.html',
  }
]

module.exports = (env, args) => {
  return merge(webpackConfig(__dirname, htmlFiles), developmentConfig);
};
