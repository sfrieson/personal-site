const path = require('path');
const glob = require('glob');
const remarkHTML = require('remark-html');
const webpack = require('webpack');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const root = path.resolve(__dirname, '..', 'src', 'pages');
const outDir = path.join(__dirname, '..', '.content');

/** @type {webpack.Configuration} */
const config = {
  context: root,
  entry: glob.sync('/**/*.md', { root }),
  module: {
    rules: [
      {
        test: /\.md$/,
        type: 'asset/resource',
        use: [
          'extract-loader',
          'html-loader',
          {
            loader: 'remark-loader',
            options: { remarkOptions: { plugins: [remarkHTML] } },
          },
        ],
      },
      {
        test: /\.jpg$/,
        type: 'javascript/auto',
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]', // there seems to be an inconsistency with the . in [ext]
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackManifestPlugin({
      generate(seed, files) {
        return files.reduce((manifest, file) => {
          const ext = path.extname(file.name).slice(1);
          manifest[ext] = manifest[ext] || [];

          manifest[ext].push(file.path);

          return manifest;
        }, {});
      },
      filter: (file) => !/^main\.\w+$/.test(file.name),
    }),
  ],
  output: {
    path: outDir,
    publicPath: './',
    assetModuleFilename: '[name][ext]', // there seems to be an inconsistency with the . in [ext]
  },
};

module.exports = config;
