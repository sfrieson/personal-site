const marked = require('marked');
const React = require('react');

module.exports = function Article({ markdown }) {
  return <article dangerouslySetInnerHTML={{ __html: marked(markdown) }} />;
};
