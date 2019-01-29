'use strict';
module.exports = function(app){
    var carsController = require('../controllers/carController');
    //list de mes voitures 
    app.route('/cars')
    .get(carsController.getCars);
}