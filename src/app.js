const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', function (req, res) {
  res.send('Hello from serveur workshop-express-eval');
});

app.get('/bingo', function (req, res) {
  fs.readFile('src/numbers.txt', 'utf8', (err, data) => {
    if (err) throw err;
    res.send(data.split('\n').slice(0, -1).join(', '));
  });
});

module.exports = app;