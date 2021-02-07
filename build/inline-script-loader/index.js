const { getOptions } = require('loader-utils');
const { validate } = require('schema-utils');
const schema = require('./options.json');

function inlineScriptLoader(source) {
  const options = getOptions(this);
  const callback = this.async();

  validate(schema, options, {
    name: 'Raw Loader',
    baseDataPath: 'options',
  });

  let all = [];
  const matches = source.match(/import\(['"](.*)['"]\)/g);
  if (matches) {
    all = matches.map(
      (match) =>
        new Promise((resolve) => {
          console.log(
            '\n\n\n%s\n\n\n',
            match.match(/import\(['"](.*)['"]\)/)[1]
          );
          this.resolve(
            this.context,
            match.match(/import\(['"](.*)['"]\)/)[1],
            (err, requestString) => {
              if (err) {
                callback(err);
                return;
              }
              console.log('\n\n\nresolved\n\n\n', requestString, '\n\n\n');
              // this.loadModule(
              //   requestString,
              //   (err, source, sourceMap, module) => {
              //     if (err) {
              //       callback(err);
              //       return;
              //     }
              //     console.log('\n\n\n', match, requestString, module);
              //     resolve();
              //   }
              // );
              this.addDependency(requestString);
              resolve();
            }
          );
        })
    );
  }

  Promise.all(all)
    .then(() => {
      const json = JSON.stringify(source)
        .replace(/\u2028/g, '\\u2028')
        .replace(/\u2029/g, '\\u2029');

      const esModule =
        typeof options.esModule !== 'undefined' ? options.esModule : true;
      callback(
        null,
        `${esModule ? 'export default' : 'module.exports ='} ${json};`
      );
    })
    .catch((err) => {
      callback(err);
    });
}

module.exports = inlineScriptLoader;
