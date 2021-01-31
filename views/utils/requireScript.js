const fs = require('fs');
const path = require('path');

module.exports = function requireScript(...args) {
  return fs.readFileSync(path.resolve(...args), {
    encoding: 'utf-8',
  });
};
