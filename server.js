var path = require('path');
var express = require('express');
var _ = require('underscore');

var app = express()
	.set('views', __dirname + '/public/htm')
	.use(express.static(__dirname + '/public'))
	.use(express.static(__dirname + '/public/htm'))
	.use(express.static(__dirname +'/bower_components'))
	.use(express.bodyParser())	

app.get('/competitions', function(req,res) {
	res.send('Competitions page');
});

app.get('/competitions/:id', function(req,res) {
	res.send('Competition ' + req.param('id'));
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log(__filename + ' is now listening on port' + port);

