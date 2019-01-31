module.exports = {
    up : (queryInterface, Sequelize) =>  {
        return queryInterface.createTable('Cars', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            model: {
                type: Sequelize.STRING,
                allowNull: false
            },
            imma: {
                type: Sequelize.STRING,
                allowNull: false
            },
        });
    },
    down: (queryInterface, Sequelize) =>  {
        return queryInterface.dropTable('Cars');
    }
}