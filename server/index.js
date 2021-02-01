const fs = require('fs');
const path = require('path');

const express = require('express');
function fileText(...pathParts) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(...pathParts), (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(data.toString());
    });
  });
}

const pagesDir = path.resolve(__dirname, '..', 'src', 'pages');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'src')));

app.set('views', path.resolve(__dirname, '..', 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', async (req, res) => {
  res.render('Home', { markdown: await fileText(pagesDir, 'index.md') });
});

app.listen(3000, () => {
  console.log('listening...');
});
