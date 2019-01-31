module.exports = (sequelize, DataTypes) => {
    const Car = sequelize.define('Car', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name:{
           type : DataTypes.STRING,
           allowNull : false
        },
        model: {
          type: DataTypes.STRING,
          allowNull: false
        },
        imma: {
          type: DataTypes.STRING,
          allowNull: false
        },
      },
      {
        tableName: 'Cars',
        timestamps: false 
        //freezeTableName: true,
      }
    );
  
    /*Post.associate = (models) => {
      Post.belongsTo(models.author);
    };*/
  
    return Car;
  }