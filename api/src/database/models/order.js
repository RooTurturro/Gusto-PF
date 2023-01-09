'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, {
        foreingKey: "orderId",
      })
      Order.belongsTo(models.Detail, {
        foreingKey: "orderId"
      });
    }
  }
  Order.init(
    {
      delivered: DataTypes.BOOLEAN,
      total: DataTypes.INTEGER,
      state: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true, // Permite el borrado logico
      timestamps: true,
      modelName: "Order",
    }
  );
  return Order;
};