const React = require('react');
const requireScript = require('../../utils/requireScript');

const baseline = 16 * 1.25 * 1.5;
function Baseline() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: requireScript(__dirname, 'script.js'),
      }}
    />
  );
}

module.exports = Baseline;
