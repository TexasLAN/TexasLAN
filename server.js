var express = require('express'),
	port = 10001;
var app = express();
app.configure(function() {
	app.use(express.static(__dirname + '/public'));
	app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
});

app.get('/', function(request, response) {
	response.render('index.jade');
});

app.listen(port);
console.log("Listening on " + port);
