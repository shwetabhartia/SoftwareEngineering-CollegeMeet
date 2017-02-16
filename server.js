var express = require('express');
var app = express();
PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');

var middleware = require('./middleware.js');

app.use(middleware.logger);
app.use(bodyParser.json());

app.get('/about', function(req, res) {
	res.send('Abous Us!');
});

app.post('/users', function (req, res) {
	var body = req.body;
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log('CollegeMeet server running');
});