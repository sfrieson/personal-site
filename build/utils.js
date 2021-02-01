const fs = require('fs');
const path = require('path');

const glob = require('glob');
const mkdirp = require('mkdirp');

const config = require('./config');

module.exports.getAllMDFilenames = async function getAllMDFilenames() {
  return new Promise((resolve, reject) => {
    glob(config.markdownFilesGlob, { root: config.root }, (err, matches) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(matches);
    });
  });
};

module.exports.read = function read(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};

module.exports.write = async function write(filename, data) {
  const dir = path.dirname(filename);
  if (!fs.existsSync(dir)) {
    await mkdirp(dir);
  }
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, data, { encoding: 'utf-8' }, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
};

module.exports.writeStream = async function writeStream(filename, stream) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, stream, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
};

module.exports.parsePath = function parsePath(filepath) {
  return path.parse(filepath);
};
