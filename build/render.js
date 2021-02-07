const fs = require('fs');
const path = require('path');

const templateRenderer = require('../.templates/template');
const contentManifest = require('../.content/manifest.json');
contentManifest.md.forEach((filepath) => {
  const md = fs.readFileSync(
    path.resolve(__dirname, '..', '.content', filepath),
    { encoding: 'utf-8' }
  );
  fs.writeFileSync(
    path.join(__dirname, '..', 'docs', filepath.replace('.md', '.html')),
    templateRenderer(md)
  );
});
