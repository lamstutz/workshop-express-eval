const express = require('express');
const fs = require('fs');

const app = express();

const BINGO_FILE_PATH = 'src/numbers.txt';

app.get('/', function (req, res) {
  res.send('Hello from serveur workshop-express-eval');
});

app.get('/bingo', function (req, res) {
  fs.readFile(BINGO_FILE_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Something broke!');
    } else {

      const bingoNumbers = data.split('\n').slice(0, -1);

      let myNumbers = req.query['myNumbers'] ? req.query['myNumbers'].split(',') : undefined;

      res.send(getBingoStatus(bingoNumbers, myNumbers));

    }
  });
});

// getBingoStatus return a string for say the bingo status
function getBingoStatus(bingoNumbers, myNumbers) {
  if (myNumbers) {
    if (bingo(bingoNumbers, myNumbers)) {
      return 'Bingo';
    } else {
      return 'The bingo game is already started, sorry your numbers doesn\'t match with known numbers ' + bingoNumbers.join(', ') + '; so you can not say Bingo';
    }
  } else {
    return 'The bingo game is already started and known numbers are ' + bingoNumbers.join(', ');
  }
}

// bingo return true if myNumbers are equal to bingoNumbers
function bingo(bingoNumbers, myNumbers) {
  return bingoNumbers.sort().toString() === myNumbers.sort().toString();
}


module.exports = app;