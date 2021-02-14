import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

import Main from './Main';

function WritingTemplate({ children, pageContext }) {
  const { frontmatter } = pageContext;
  return (
    <Main>
      <Helmet title={frontmatter.title}>
        {frontmatter.canonical && (
          <link rel="canonical" href={frontmatter.canonical} />
        )}
      </Helmet>
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
      title: PropTypes.string.isRequired,
      canonical: PropTypes.string,
    }),
  }).isRequired,
};

export default WritingTemplate;
