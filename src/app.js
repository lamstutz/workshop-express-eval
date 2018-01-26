const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello from serveur workshop-express-eval');
});

app.get('/bingo', function (req, res) {
  res.send('Bingo');
});

module.exports = app;