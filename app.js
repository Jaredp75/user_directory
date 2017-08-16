const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const dataset = require('data.js');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', __dirname + '/views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/', function (req, res) {

  res.render('data.js', {text: Robot Dorectory});
});

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
