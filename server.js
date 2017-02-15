var express = require('express');
var app = express();
PORT=3000;

/*app.get('/', function (req, res) {
	res.send('CollegeMeet!');
});*/

app.get('/about', function (req, res) {
	res.send('Abous Us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log('CollegeMeet server running');
});