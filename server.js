var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var db = require('./db.js');

var app = express();
PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.send('CollegeMeet API Root');
});

app.get('/about', function(req, res) {
	res.send('Abous Us!');
});

app.post('/users', function (req, res) {
	var body = _.pick(req.body, 'email', 'password');

	db.user.create(body).then(function(user) {
		res.json(user.toPublicJSON());
	}, function(e) {
		res.status(400).json(e);
	});
});

app.use(express.static(__dirname + '/public'));

db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log('CollegeMeet listening on PORT '+ PORT);
	});
});