const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const layOut = require('./views/layout');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send(layOut('hello world'));
});

const port = '1337';

app.listen(port, () => {
  console.log('listening on port ', port);
});
