const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const layOut = require('./views/layout');
const { db } = require('./models');
const Page = require('./models');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

db.authenticate().then(() => {
  console.log('connected to the database!');
});

app.get('/', (req, res) => {
  res.send(layOut('hello world'));
});

async function syncModels() {
  try {
    await Page.sync();
    await User.sync();
  } catch (err) {
    console.log(err);
  }
}
syncModels();
const port = '1337';

app.listen(port, () => {
  console.log('listening on port ', port);
});
