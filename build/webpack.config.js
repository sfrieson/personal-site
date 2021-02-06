const path = require('path');
const glob = require('glob');
const renderTemplate = require('../.build/render');

const root = path.resolve(__dirname, '..', 'src', 'pages');
const buildRoot = path.join(__dirname, '..', '.build');

module.exports = {
  context: root,
  // entry: {
  //   // 'template/Home': '/views/Home.jsx',
  //   // 'markdown-assets': '/.build/markdown-assets.js',
  // },
  entry: glob.sync('/**/*.md', { root: './src' }),
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
      {
        test: /\.woff2?$/,
        use: [{ loader: 'file-loader' }],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'file-loader', options: { name: '[name].css' } },
          'extract-loader',
          'css-loader',
        ],
      },
      {
        test: /\.md$/,
        use: [
          { loader: 'file-loader', options: { name: '[path][name].html' } },
          'extract-loader',
          {
            loader: 'html-loader',
            options: {
              attributes: true,
              preprocessor: (file) => {
                return renderTemplate(file);
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: buildRoot,
    publicPath: '/',
    // filename: (pathData) => {
    //   console.log(pathData);
    //   if (pathData.runtime === 'pages') return '[name].html';
    //   return '[name].html2';
    // },
    // libraryTarget: 'commonjs2',
  },
};
