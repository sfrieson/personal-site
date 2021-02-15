import PropTypes from 'prop-types';
import React from 'react';

import SEO from '../components/SEO';
import ArticleMeta from '../components/ArticleMeta';

import Main from './Main';

function WritingTemplate({ children, pageContext }) {
  const { frontmatter, humanDate } = pageContext;
  const onTheLine = { marginLeft: `calc(var(--space-half) * -1)` };
  return (
    <Main>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || frontmatter.synopsis}
        canonical={frontmatter.canonical}
        isArticle
      />
      <div style={{ ...onTheLine, overflow: 'hidden' }}>
        <p
          className="color--display fontWeight--bold fontSize--4"
          style={{ opacity: 0.25, transform: 'translate(-0.15em)' }}
          role="presentation"
        >
          stevenfrieson.com
        </p>
      </div>
      <div style={onTheLine}>
        <ArticleMeta date={frontmatter.date} formattedDate={humanDate} />
      </div>
      {children}
    </Main>
  );
}

WritingTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  pageContext: PropTypes.shape({
    frontmatter: PropTypes.shape({
      description: (...args) => {
        const [props, propName, componentName] = props;
        if (props.synopsis === undefined && props[propName] === undefined) {
          return new Error(
            `Must supply \`synopsis\` or \`description\` to ${componentName}`
          );
        }

        return PropTypes.string(...args);
      },
      synopsis: PropTypes.string,
      title: PropTypes.string.isRequired,
      canonical: PropTypes.string,
      date: PropTypes.string.isRequired,
    }),
    humanDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default WritingTemplate;
