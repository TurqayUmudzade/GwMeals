"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Address, User, Payment, OrderType, Menu, MenuOrder }) {
      this.belongsTo(Address, { foreignKey: "address_id" })
      this.belongsTo(User, { foreignKey: "user_id" })
      this.belongsTo(OrderType, { foreignKey: "ordertype_id" })
      this.belongsTo(Payment, { foreignKey: "payment_id" })
      this.belongsToMany(Menu, { through: MenuOrder, foreignKey: "menu_id" })
      this.hasMany(MenuOrder, { foreignKey: "order_id" })
    }
  }
  Order.init(
    {
      order_status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    }
  )
  return Order
}
