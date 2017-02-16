var express = require('express');
var app = express();
PORT=process.env.PORT || 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', function (req, res) {
	res.send('Abous Us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log('CollegeMeet server running');
});