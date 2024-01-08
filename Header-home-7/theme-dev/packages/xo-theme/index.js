const fs = require('fs');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyFilePlugin = require('copy-webpack-plugin');
const WatchExternalFilesPlugin = require('webpack-watch-files-plugin').default;
const WriteFilePlugin = require('write-file-webpack-plugin');
const { WatchSectionPlugin } = require('./build-utils/addons/webpack.watch-section.win');

module.exports = (dirName, { PRESET, LANG_SCHEMA, DEFAULT_LANGUAGE }) => {
  const publicPath = `${dirName}/shopify/`;
  const assetsPath = `${dirName}/shopify/assets`;

  return {
    mode: 'development',
    // Entry point
    entry: {
      main: `${dirName}/src/main.ts`,
    },
    // Output files
    output: {
      path: `${dirName}/shopify/assets/`,
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: ['ts-loader', 'glob-import-loader'],
        },
        {
          test: /\.scss|\.css/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                url: false,
                sourceMap: true,
                // 0 => no loaders;
                // 1 => postcss-loader;
                // 2 => postcss-loader, sass-loader
                importLoaders: 2,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                postcssOptions: {
                  plugins: [['autoprefixer', { grid: true }]],
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'glob-import-loader',
            },
          ],
        },
        {
          test: /\.svg$/,
          use: ['svg-sprite-loader', 'svgo-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      new WatchSectionPlugin({
        dirName,
        LANG_SCHEMA,
        DEFAULT_LANGUAGE,
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
      new WatchExternalFilesPlugin({
        files: [
          `${dirName}/src/sections/**/*.js`,
          `${dirName}/src/sections/**/*.json`,
          `${dirName}/src/sections/**/*.scss`,
          `${dirName}/src/groups/**/*.js`,
          `${dirName}/src/groups/**/*.json`,
          `${dirName}/src/groups/**/*.scss`,
          `${dirName}/src/pages/**/*.js`,
          `${dirName}/src/pages/**/*.json`,
          `${dirName}/src/pages/**/*.scss`,
          `${dirName}/src/styles/single/**/*.scss`,
          `${dirName}/src/snippets/**/*.scss`,
          `${dirName}/src/locales/**/*.json`,
          `${dirName}/src/config/**/*.json`,
          `${dirName}/src/**/*.liquid`,
        ],
      }),
      new CopyFilePlugin({
        patterns: [
          {
            context: `${dirName}/src/layout`,
            from: '*.liquid',
            to: `${publicPath}/layout/[name][ext]`,
          },
          {
            context: `${dirName}/src/assets`,
            from: '*.*',
            to: `${publicPath}/assets/`,
          },
          {
            context: `${dirName}/src/groups`,
            from: '**/*group.json',
            to: ({ absoluteFilename }) => {
              const fileName = path.parse(absoluteFilename).base;
              return `${publicPath}/sections/${fileName}`;
            },
          },
          {
            context: `${dirName}/src/sections`,
            from: '**/*.script-external.js',
            // to: `${assetsPath}/[name][ext]`,
            to: ({ absoluteFilename }) => {
              const fileName = path.parse(absoluteFilename).base.replace('.script-external.js', '.js');
              return `${assetsPath}/${fileName}`;
            },
          },
          {
            context: `${dirName}/src/pages`,
            from: '**/*.script-external.js',
            to: ({ absoluteFilename }) => {
              const fileName = path.parse(absoluteFilename).base.replace('.script-external.js', '.js');
              return `${assetsPath}/${fileName}`;
            },
          },
          {
            context: `${dirName}/src/snippets`,
            from: '**/*.liquid',
            to: `${publicPath}/snippets/[name][ext]`,
          },
          {
            context: `${dirName}/src/pages`,
            from: '**/snippets/**/*.liquid',
            to: `${publicPath}/snippets/[name][ext]`,
          },
          {
            context: `${dirName}/src/pages/gift_card`,
            from: 'gift_card.liquid',
            to: `${publicPath}/templates/gift_card.liquid`,
          },
          {
            context: `${dirName}/src/pages`,
            from: `**/*.${PRESET}.json`,
            to: ({ absoluteFilename }) => {
              const fileName = path.parse(absoluteFilename).base.replace(`${PRESET}.json`, 'json');
              const customersFileNameArr = ['account', 'activate_account', 'addresses', 'login', 'order', 'register', 'reset_password'];
              if (customersFileNameArr.some(fruit => fileName.includes(fruit))) {
                return `${publicPath}/templates/customers/${fileName}`;
              }
              return `${publicPath}/templates/${fileName}`;
            },
          },
          {
            context: `${dirName}/src/pages`,
            from: `**/*.preset-1.json`,
            filter: async (resourcePath) => {
              if (PRESET === 'preset-1') {
                return false;
              }
              const filePath = path.parse(resourcePath).base + path.parse(resourcePath).base.replace('preset-1', PRESET);
              if (fs.existsSync(filePath)) {
                return false;
              }
              return true;
            },
            to: ({ absoluteFilename }) => {
              const fileName = path.parse(absoluteFilename).base.replace('preset-1.json', 'json');
              const customersFileNameArr = ['account', 'activate_account', 'addresses', 'login', 'order', 'register', 'reset_password'];
              if (customersFileNameArr.some(fruit => fileName.includes(fruit))) {
                return `${publicPath}/templates/customers/${fileName}`;
              }
              return `${publicPath}/templates/${fileName}`;
            },
          },
        ],
      }),
      new WriteFilePlugin(),
    ],
    target: ['web', 'es5'],
  };
};
