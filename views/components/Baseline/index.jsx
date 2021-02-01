const React = require('react');

const baseline = 16 * 1.25 * 1.5;
function Baseline() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: require('./script.script.js'),
      }}
    />
  );
}

module.exports = Baseline;
