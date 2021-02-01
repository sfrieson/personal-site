const webpack = require('webpack');

console.time('Run');
async function runWebpack() {
  return new Promise((resolve, reject) => {
    const compiler = webpack(require('./webpack.config'));
    compiler.run((err, stats) => {
      if (err) {
        console.error(err);
        reject(err);
        return;
      }
      resolve(stats);
    });
  });
}
async function routine() {
  await require('./pre-webpack')();
  await runWebpack();
  await require('./post-webpack')();
}

routine()
  .then(() => console.timeEnd('Run'))
  .catch(console.err);
