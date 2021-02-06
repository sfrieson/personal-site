const React = require('react');
const PropTypes = require('prop-types');

function Head({
  title = "Steven Frieson's Website",
  description = "Learn about Steven's current projects and read articles he's written.",
}) {
  return (
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link
        rel="preload"
        href="/fonts/atkinson-hyperlegible/regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        href="../styles.css"
        rel="stylesheet"
        type="text/css"
        id="mainStylesheet"
      />
    </head>
  );
}

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

module.exports = Head;
