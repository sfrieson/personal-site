const React = require('react');

function Baseline() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: require('./script?inline'),
      }}
    />
  );
}

module.exports = Baseline;
