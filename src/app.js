const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', function (req, res) {
  res.send('Hello from serveur workshop-express-eval');
});

app.get('/bingo', function (req, res) {
  fs.readFile('src/numbers.txt', 'utf8', (err, data) => {
    if (err) throw err;
    const bingoNumbers = data.split('\n').slice(0, -1);

    if (req.query['myNumbers']) {
      let myNumbers = req.query['myNumbers'].split(',');

      if (bingo(myNumbers, bingoNumbers)) {
        res.send('Bingo');
      } else {
        res.send('The bingo game is already started, sorry your numbers doesn\'t match with known numbers ' + bingoNumbers.join(', ') + '; so you can not say Bingo');
      }

    } else {
      res.send('The bingo game is already started and known numbers are ' + bingoNumbers.join(', '));
    }

  });
});

const bingo = (myNumbers, bingoNumbers) => bingoNumbers.sort().toString() === myNumbers.sort().toString();


module.exports = app;