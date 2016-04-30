var express = require('express');
var app = express();

app.get('/', function(req, res) {
  var output = {
      "ipaddress":req.headers["x-forwarded-for"],
      "language":req.headers["accept-language"],
      "software":req.headers["user-agent"].slice(req.headers["user-agent"].indexOf("(")+1,req.headers["user-agent"].indexOf(")"))
  }
  res.json(output);
});

app.listen(process.env.PORT || 4730);