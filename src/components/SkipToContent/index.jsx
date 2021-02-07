import PropTypes from 'prop-types';
import React from 'react';

export function Skip() {
  return (
    <a className="skip-content elevation--1 padding--half" href="#main-content">
      Skip to main content.
    </a>
  );
}

export function Content({ children, as = 'main', className }) {
  const Main = as;
  return (
    <Main id="main-content" className={className}>
      {children}
    </Main>
  );
}

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  className: PropTypes.string,
};
