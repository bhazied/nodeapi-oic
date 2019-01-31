//require express for starting the application server
//var express = require('express');
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/cars.route';
//import db from './models';
var app = express();

//adding a body parser for url and body response as json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var port = process.env.PORT || 3300

//init all routes
routes(app);
app.listen(port);
console.log('hi every body');
