const React = require('react');

function Skip() {
  return (
    <a className="skip-content elevation--1 padding--half" href="#main-content">
      Skip to main content.
    </a>
  );
}

function Content({ children, as = 'main', className }) {
  const Main = as;
  return (
    <Main id="main-content" className={className}>
      {children}
    </Main>
  );
}

module.exports = { Skip, Content };
