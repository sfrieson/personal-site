const path = require('path');

const frontmatter = require('frontmatter');
const React = require('react');
const ReactDOM = require('react-dom/server');
const HomeTemplate = require('../.build/template/Home');

const { getAllMDFilenames, writeStream, parsePath, read } = require('./utils');

function renderTemplateToStream(template, markdown) {
  return ReactDOM.renderToStaticMarkup(
    React.createElement(template, { markdown })
  );
}

const templateMap = new Map([['Home', HomeTemplate]]);
const zip = (main, ...args) =>
  main.map((el, i) => [el, ...args.map((arg) => arg[i])]);
module.exports = async function routine() {
  const mdFilenames = await getAllMDFilenames();
  const mdFiles = await Promise.all(mdFilenames.map(read));
  await Promise.all(
    zip(mdFilenames, mdFiles).map(([filename, md], i) => {
      const { data = {}, content } = frontmatter(md);

      if (!templateMap.has(data.template)) {
        throw new Error(`Unknown template: ${data.template}`);
      }
      const Template = templateMap.get(data.template);

      const parsedFilepath = parsePath(filename);

      return writeStream(
        path.resolve(
          __dirname,
          '..',
          'docs',
          parsedFilepath.dir.replace('src/pages', ''),
          parsedFilepath.name + '.html'
        ),
        '<!DOCTYPE html>\n' + renderTemplateToStream(Template, content)
      );
    })
  );
};
