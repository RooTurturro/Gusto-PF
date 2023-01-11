'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Topping.belongsToMany(models.Product, {
        through: "prod-toppin",
        foreignKey: "toppingId",
        constraints: false,
      });
    }
  }
  Topping.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      paranoid: true, // Permite el borrado logico
      timestamps: true,
      modelName: "Topping",
    }
  );
  return Topping;
};