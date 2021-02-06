const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: path.resolve(__dirname, '..', 'src', 'templates'),
  entry: {
    render: '/render.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.script\.js$/,
        type: 'asset/source',
      },
      {
        test: /\.woff2?$/,
        type: 'asset',
      },
      {
        test: /\.css$/,
        // type: 'asset/source',
        use: [
          { loader: 'file-loader' },
          'extract-loader',
          // MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  resolve: { extensions: ['.js', '.jsx'], fallback: { buffer: false } },
  output: {
    path: path.resolve(__dirname, '..', '.build'),
    libraryTarget: 'commonjs2',
    publicPath: '/',
  },
  plugins: [new MiniCssExtractPlugin()],
};
