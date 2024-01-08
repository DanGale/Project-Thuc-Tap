const fs = require('fs');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (dirName) => {
  const htmlFiles = [];
  const directories = [`./src/html`];
  while (directories.length > 0) {
      const directory = directories.pop();
      const dirContents = fs.readdirSync(directory)
          .map(file => path.join(directory, file));

      htmlFiles.push(...dirContents.filter(file => file.endsWith('.html')));
      directories.push(...dirContents.filter(file => fs.statSync(file).isDirectory()));
  }

  return {
    mode: 'development',
    // Entry point
    entry: {
      main: `${dirName}/src/main.ts`,
    },
    // Output files
    output: {
      path: `${dirName}/dist/`,
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
                url: true,
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
            test: /\.(html)$/,
            use: {
                loader: 'html-loader',
            }
        },
        {
          test: /\.(png|jpg|gif|ico|)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/[name][ext]'
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/[name][ext]'
          }
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
      ...htmlFiles.map(htmlFile =>
        new HTMLWebpackPlugin({
            template: htmlFile,
            filename: htmlFile.replace('src/html/', '').replace('src\\html\\', '')
        })
      ),
      new CopyPlugin({
        patterns: [
          { from: `${dirName}/src/assets/bg`, to: `${dirName}/dist/assets/bg` },
        ],
      }),
    ],
    target: ['web', 'es5'],
  };
};
