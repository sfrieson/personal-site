const path = require('path');
const webpack = require('webpack');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const root = path.resolve(__dirname, '..', 'src');
const outDir = path.join(__dirname, '..', '.templates');

/** @type {webpack.Configuration} */
const config = {
  context: root,
  entry: {
    template: '/templates/render.js',
  },
  // mode: 'production',
  module: {
    noParse: [/\.woff2?/],
    rules: [
      {
        test: /\.jsx?$/,
        oneOf: [
          {
            resourceQuery: /inline/,
            // type: 'asset',
            use: [
              {
                loader: path.resolve(__dirname, 'babel-import-extractor'),
              },
              'babel-loader',
            ],
            // parser: {
            //   import: true,
            // },
          },
          {
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
        ],
      },
      {
        test: /\.mjs$/,
        type: 'javascript/esm',
        use: [
          {
            loader: 'file-loader',
            options: { name: '[path][name].[ext]' },
          },
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        type: 'asset/resource',
        use: ['extract-loader', 'css-loader'],
        generator: {
          filename: 'styles/[name][ext]',
        },
      },
      {
        test: /\.woff2?$/,
        type: 'javascript/auto',
        use: [
          { loader: 'file-loader', options: { name: 'fonts/[name].[ext]' } },
        ],
      },
    ],
  },
  resolve: { fallback: { buffer: false }, extensions: ['.js', '.jsx', '.mjs'] },
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
    }),
  ],
  output: {
    path: outDir,
    publicPath: './',
    libraryTarget: 'commonjs2',
    globalObject: 'global',
  },
};

module.exports = config;
