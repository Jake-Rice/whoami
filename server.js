var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.json(req.headers);
});

app.listen(process.env.PORT || 4730);