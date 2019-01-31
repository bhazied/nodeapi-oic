'use strict'
import db from '../models';
export function getCars(request, response){
    let cars = db.Car.findAll().then((result) => response.json(result));
    /*response.json(JSON.parse(
    '[{"name": "volswagen", "model": "passat", "imma": "7521TUN153"},{"name": "volswagen", "model": "passat", "imma": "7521TUN153"},{"name": "volswagen", "model": "passat", "imma": "7521TUN153"}]'
));*/
}

export function addCar(request, response){
    let car = {
        name: request.body.name,
        model: request.body.model,
        imma: request.body.imma
    };
    db.Car.create(car).then((newCar) => {
        console.log(newCar);
        response.json(newCar);
    });
   /* db.Car.Save(car).then((car) => {
        console.log("car model "+ car.name + " added with success ")
    });*/
}