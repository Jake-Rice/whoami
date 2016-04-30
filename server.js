var express = require('express');
var app = express();

app.get('/:id', function(req, res) {
  res.type('application/json');
  res.json({'i am a beautiful butterfly':true});
});

app.listen(process.env.PORT || 4730);