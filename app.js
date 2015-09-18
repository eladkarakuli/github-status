var express = require("express");
var app = express();
var bodyParser = require('body-parser');

/*app.use(express.logger());*/

// Configuration

app.set('views', __dirname + '/app');
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/app'));
app.engine('html', require('ejs').renderFile);


// Routes
var routes = require('./routes/api');
app.use('/', routes);


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
