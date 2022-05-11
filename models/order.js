"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Adress, User, Payment, OrderType }) {
      this.belongsTo(Adress, { foreignKey: "address_id" })
      this.belongsTo(User, { foreignKey: "user_id" })
      this.belongsTo(OrderType, { foreignKey: "ordertype_id" })
      this.belongsTo(Payment, { foreignKey: "payment_id" })
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
