import PropTypes from 'prop-types';
import React from 'react';
import SEO from '../components/SEO';

import Main from './Main';

function WritingTemplate({ children, pageContext }) {
  const { frontmatter } = pageContext;
  return (
    <Main>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || frontmatter.synopsis}
        canonical={frontmatter.canonical}
        isArticle
      />
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
    }),
  }).isRequired,
};

export default WritingTemplate;
