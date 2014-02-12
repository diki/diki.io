var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());
app.listen(9080);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.post('/', function(req, res) {
    var apiKey = req.param('apiKey'), 
        username = req.param('username'), 
        formId = req.param('formId');
    
      res.sendfile(__dirname + '/jf.html');
});
//noditor text