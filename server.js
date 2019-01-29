//require express for starting the application server
var express = require('express');
//require the bodu parser to use
var bodyParser = require('body-parser');
//import the routes
var routes = require('./routes/cars.route');
app = express();

//adding a body parser for url and body response as json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

port = process.env.PORT || 3300

//init all routes
routes(app);
app.listen(port);
console.log('hi every body');