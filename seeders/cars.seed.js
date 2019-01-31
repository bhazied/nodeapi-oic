module.exports = {
up : (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cars', [
        {name: "Car name 1", model: "car model 1", imma: "car imma 1"},
        {name: "Car name 1", model: "car model 1", imma: "car imma 1"},
        {name: "Car name 1", model: "car model 1", imma: "car imma 1"},
        {name: "Car name 1", model: "car model 1", imma: "car imma 1"},
        {name: "Car name 1", model: "car model 1", imma: "car imma 1"},
    ]);
},
down : (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cars', null, {});
}
};