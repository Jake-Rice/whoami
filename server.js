var express = require('express');
var app = express();

app.get('/:id', function(req, res) {
  res.type('application/json');
  res.send('i am a beautiful butterfly');
});

app.listen(process.env.PORT || 4730);