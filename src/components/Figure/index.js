import PropTypes from 'prop-types';
import React from 'react';

function Figure({ caption, children }) {
  return (
    <figure>
      {children}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

Figure.propTypes = {
  caption: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  children: PropTypes.node.isRequired,
};

export default Figure;
