var express = require('express');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();
// Returns middleware that only parses urlencoded bodies.
app.use(bodyParser.urlencoded({extended : true}));
// Returns middleware that only parses json.
app.use(bodyParser.json());
app.use(express.static('node_modules'));
app.use(express.static('public'));
app.use(express.static('data'));


app.get('/', function (req, res) {
	console.log(path.join(__dirname + '/public/index.html'));
	res.sendFile(path.join(__dirname + '/public/index.html'));
	//res.send('Hello');
});

app.get('/recupererPersonnes', function(req, res){
	var fichierCrm = require('./data/crm');
	res.json(fichierCrm);
});

app.post('/enregistrerPersonne', function(req, res){
	var fichierCrm = require('./data/crm');
	fichierCrm.customers.push(req.body);
	console.log(fichierCrm);
	var file = path.join(__dirname + '/data/crm.json')
	fs.writeFile(file, JSON.stringify(fichierCrm, null, 2), function(err){
		if(err){
			console.log(err);
		}
	});
	res.json(fichierCrm);
});

var port = 3010;
app.listen(port, function () {
  console.log('Serveur mini-crm en écoute sur le port ' + port);
})