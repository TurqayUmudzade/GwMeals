'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MenuOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Menu, Order }) {
      this.belongsTo(Order, { foreignKey: "order_id" })
      this.belongsTo(Menu, { foreignKey: "menu_id" })
    }
  }
  MenuOrder.init({
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MenuOrder',
  });
  return MenuOrder;
};