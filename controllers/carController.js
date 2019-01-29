'use strict'
exports.getCars = function(request, response){
response.json(JSON.parse(
    '[{"name": "volswagen", "model": "passat", "imma": "7521TUN153"},{"name": "volswagen", "model": "passat", "imma": "7521TUN153"},{"name": "volswagen", "model": "passat", "imma": "7521TUN153"}]'
))
}