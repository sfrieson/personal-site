import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        twitterUsername
        siteUrl
      }
    }
  }
`;

function SEO({ title, canonical, description, isArticle }) {
  const { site } = useStaticQuery(query);
  const { siteMetadata } = site;
  const seo = {
    title: title || siteMetadata.defaultTitle,
    description: description || siteMetadata.defaultDescription,
    twitterUsername: siteMetadata.twitterUsername,
    url: siteMetadata.siteUrl,
    canonical,
  };
  return (
    <Helmet title={seo.title}>
      <html lang="en-US" />
      <meta charSet="utf-8" />
      <meta name="description" content={seo.description} />
      {seo.canonical && <link rel="canonical" href={seo.canonical} />}

      <meta property="og:url" content={seo.url} />
      {isArticle && <meta property="og:type" content="article" />}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  canonical: PropTypes.string,
  description: PropTypes.string,
  isArticle: PropTypes.bool,
};

export default SEO;
