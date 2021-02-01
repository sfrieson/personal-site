const path = require('path');

const config = {
  root: path.resolve(__dirname, '..'),
};
config.buildPath = path.join(config.root, '.build');
config.markdownFilesGlob = path.join('src', 'pages', '**', '*.md');
config.markdownAssetsEntryPath = path.join(
  config.buildPath,
  'markdown-assets.js'
);

module.exports = config;
