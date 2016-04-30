var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.json('i am a beautiful butterfly');
});

app.listen(process.env.PORT || 4730);