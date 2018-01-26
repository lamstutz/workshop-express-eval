let chalk = require('chalk');

const app = require('./src/app');

// port
const port = 3000;

// start server here
app.listen(3000, function () {
  console.log(chalk.green('Hello web server, listen on port ' + port));
});
