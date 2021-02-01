const path = require('path');
var AssetsPlugin = require('assets-webpack-plugin');

const root = path.resolve(__dirname, '..');
const buildRoot = path.join(root, '.build');
module.exports = {
  context: root,
  entry: {
    'template/Home': '/views/Home.jsx',
    'markdown-assets': '/.build/markdown-assets.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.script\.js$/,
        type: 'asset/source',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: buildRoot,
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
};
