'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Address, Payment, OrderType, User }) {
      this.hasOne({ Address })
      this.hasOne({ Payment })
      this.hasOne({ OrderType })
      this.hasOne({ User })
    }
  }
  Orders.init({
    total_amount: DataTypes.FLOAT,
    order_status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};