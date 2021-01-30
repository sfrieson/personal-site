const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'src')));

app.set('views', path.resolve(__dirname, '..', 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/happy', (req, res) => {
  res.render('happy');
});

app.listen(3000, () => {
  console.log('listening...');
});
