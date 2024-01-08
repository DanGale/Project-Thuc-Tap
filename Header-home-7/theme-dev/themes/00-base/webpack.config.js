const dotenv = require('dotenv');
const webpackConfig = require('@xo/theme');
const { merge } = require('webpack-merge');

dotenv.config();
const PRESET = process.env.PRESET;
const LANG_SCHEMA = process.env.LANG_SCHEMA;

const developmentConfig = { mode: 'development' };

module.exports = (env, args) => {
  return merge(webpackConfig(__dirname, { PRESET, LANG_SCHEMA }), developmentConfig);
};
