'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsToMany(models.Detail, { through: "DetailProduct" });
      Product.belongsTo(models.Category);
      Product.belongsToMany(models.Toppings, { through: "prod-toppin" });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.INTEGER,
      image: DataTypes.STRING,
      state: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true, // Permite el borrado logico
      timestamps: true,
      modelName: "Product",
    }
  );
  return Product;
};