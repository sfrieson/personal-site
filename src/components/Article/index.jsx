const PropTypes = require('prop-types');
const React = require('react');
const RemarkA11yEmoji = require('@fec/remark-a11y-emoji');
const unified = require('unified');
const remarkParse = require('remark-parse');
const remark2rehype = require('remark-rehype');
const rehypeStringify = require('rehype-stringify');
const rehypeRaw = require('rehype-raw');

const convert = (file) =>
  unified()
    .use(remarkParse)
    .use(RemarkA11yEmoji)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .processSync(file).contents;

function Article({ markdown }) {
  return <article dangerouslySetInnerHTML={{ __html: convert(markdown) }} />;
}

Article.propTypes = {
  markdown: PropTypes.string.isRequired,
};

module.exports = Article;
