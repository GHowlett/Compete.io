var path = require('path');
var express = require('express');
var _ = require('underscore');

var app = express()
	.set('views', __dirname + '/public/htm')
	.use(express.static(__dirname + '/public'))
	.use(express.static(__dirname + '/public/htm'))
	.use(express.static(__dirname +'/bower_components'))
	.use(express.bodyParser())	

var db = { // temporary in-memory database
	first: {id:2}
}; 

app.get('/competitions', function(req,res) {
	// TODO: implement this
	res.send('Competitions page');
});

// Given a name or id, serves either an html page a json model 
app.get('/competitions/:nameOrId', function(req,res) {
	var nameOrId = req.param('nameOrId'); //find compotition by ID or Name
	var comp = _.findWhere(_.values(db), {id:nameOrId}) || db[nameOrId];

	if (!comp) res.send(404, 'Sorry, competition "' + nameOrId + '" doesn\'t exist');
	else if (req.accepts('json')) res.json(comp);
	else if (req.accepts('html')) ; //TODO: render HTML
	else res.send(406, 'Not Acceptable');
});

app.post('/competitions', function(req,res) {
	// only works if 1+ competitions exist in the db
	req.body.id = _.max(_.pluck(_.values(db),'id')) +1;
	db[req.body.name.replace(/\W+/g, '-')] = req.body;
	res.json(req.body); 
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log(__filename + ' is now listening on port' + port);

