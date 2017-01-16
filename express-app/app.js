var express = require('express')
var app = express()

app.get('/', function (req, res) {
  console.log('request on page /');
  res.send('Hello World!');
})

app.get('/about', function (req, res) {
  console.log('request on page /about');
  res.send('About...');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
