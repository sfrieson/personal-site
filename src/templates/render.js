const React = require('react');
const ReactDOM = require('react-dom/server');
const PropTypes = require('prop-types');
const unified = require('unified');
const yaml = require('js-yaml');

const RemarkParse = require('remark-parse');
const RemarkFrontmatter = require('remark-frontmatter');
const RemarkStringify = require('remark-stringify');

const Home = require('./Home');

function TemplateSwitcher({ data = {}, contents = '' }) {
  switch (data.template) {
    case 'Home':
    default:
      return <Home {...data} markdown={contents} />;
  }
}
function frontmatterToData() {
  return (node, file) => {
    if (node.children && node.children[0].type === 'yaml') {
      const yamlString = node.children.shift().value;
      const data = yaml.load(yamlString);
      file.data = Object.assign(file.data, data);
    }
    return node;
  };
}

TemplateSwitcher.propTypes = {
  data: PropTypes.shape({}),
  contents: PropTypes.string.isRequired,
};

module.exports = function (mdFile) {
  const vFile = unified()
    .use(RemarkParse)
    .use(RemarkFrontmatter, { type: 'yaml', marker: '-' })
    .use(frontmatterToData)
    .use(RemarkStringify)
    .processSync(mdFile);

  return (
    '<!DOCTYPE html>' +
    ReactDOM.renderToString(React.createElement(TemplateSwitcher, vFile))
  );
};
