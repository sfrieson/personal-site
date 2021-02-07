const webpack = require('webpack');

const compiler = webpack(require('./webpack-content.config'));

function compile(compiler) {
  compiler.run((err, stats) => {
    if (err) {
      console.error('huh');
    } else {
      console.log('Whoo!');
    }
  });
}

compile(compiler);
