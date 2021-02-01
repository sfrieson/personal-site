/*

Markdowns - -> = assets
React tempaltes - -> = assets
  assets = -> - assets.js
                assets.js - -> webpack
                               webpack - -> = out/assets
                               webpack - -> asset-map.json
                                            asset-map.json + HTML Templates + HTML = -> out/html
*/

const config = require('./config');
const { getAllMDFilenames, read, write } = require('./utils');

const marked = require('marked');

function extractAssetsFromMD(mdText) {
  const assets = [];
  marked.use({
    walkTokens: (token) => {},
  });

  marked(mdText);
  return assets;
}

function flattenAndDedupe(arrays) {
  const deduped = new Set(arrays[0]);
  for (let i = 1; i < arrays.length; i++) {
    const arr = arrays[i];
    arr.forEach((el) => deduped.add(el));
  }
  return [...deduped];
}

function makeFilesAssetsEntry(filesAssets) {
  let requireFile = '';
  filesAssets.forEach((fileAssets) =>
    fileAssets.forEach((asset) => (requireFile += `require(../${asset});`))
  );
  return requireFile;
}
module.exports = async function routine() {
  const mdFilenames = await getAllMDFilenames();
  const mdFiles = await Promise.all(mdFilenames.map(read));
  const mdAssets = flattenAndDedupe(mdFiles.map(extractAssetsFromMD));
  const mdAssetsRequireJs = makeFilesAssetsEntry(mdAssets);
  await write(config.markdownAssetsEntryPath, mdAssetsRequireJs);
};
