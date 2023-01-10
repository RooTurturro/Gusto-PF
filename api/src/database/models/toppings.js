'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Toppings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Toppings.belongsToMany(models.Product, { through: "prod-toppin" });
    }
  }
  Toppings.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true, // Permite el borrado logico
      timestamps: true,
      modelName: "Toppings",
    }
  );
  return Toppings;
};