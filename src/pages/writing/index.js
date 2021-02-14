import PropTypes from 'prop-types';
import React from 'react';
import { Link, graphql } from 'gatsby';

import MainLayout from '../../layouts/Main';

export const pageQuery = graphql`
  query MyQuery {
    allMdx(
      filter: { slug: { glob: "writing/*" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          slug
          id
          frontmatter {
            title
            synopsis
          }
        }
      }
    }
  }
`;

function WritingIndex({ data }) {
  return (
    <MainLayout>
      <h1>Recent Writing</h1>
      <p>Here is a list of the most recent things I&apos;ve written.</p>
      <ol>
        {data.allMdx.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={'/' + node.slug}>{node.frontmatter.title}</Link>
            {node.frontmatter.synopsis && <p>{node.frontmatter.synopsis}</p>}
          </li>
        ))}
      </ol>
    </MainLayout>
  );
}

WritingIndex.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.node.isRequired,
            slug: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              synopsis: PropTypes.string,
            }),
          }),
        })
      ),
    }),
  }),
};

export default WritingIndex;
