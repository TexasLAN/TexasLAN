var express = require('express'),
	app = express(),
	swig = require('swig'),
	port = 10001;

app.configure(function() {
	app.use(express.static(__dirname + '/public'));
	app.engine('html', swig.renderFile);
	app.set('view engine', 'html');
	app.set('views', __dirname + '/views');
});

app.get('/', function(req, res) {
	res.render('index', {});
});

app.get('/index', function(req, res) {
	res.redirect('/');
});

app.listen(port);
console.log("Listening on " + port);
