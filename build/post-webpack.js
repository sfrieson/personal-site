const path = require('path');
const React = require('react');
const ReactDOM = require('react-dom/server');
const HomeTemplate = require('../.build/template/Home');

const { getAllMDFilenames, writeStream, parsePath, read } = require('./utils');

function renderTemplateToStream(template, markdown) {
  return ReactDOM.renderToStaticMarkup(
    React.createElement(template, { markdown })
  );
}

module.exports = async function routine() {
  const mdFilenames = await getAllMDFilenames();
  const mdFiles = await Promise.all(mdFilenames.map(read));
  await Promise.all(
    mdFiles.map((md, i) => {
      const filename = mdFilenames[i];
      const template =
        filename === 'src/pages/index.md' ? HomeTemplate : HomeTemplate;
      const parsedFilepath = parsePath(filename);

      return writeStream(
        path.resolve(
          __dirname,
          '..',
          'docs',
          parsedFilepath.dir.replace('src/pages', ''),
          parsedFilepath.name + '.html'
        ),
        renderTemplateToStream(template, md)
      );
    })
  );
};
