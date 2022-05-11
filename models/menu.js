"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ MenuOrder, Order }) {
      this.belongsToMany(Order, { through: MenuOrder, foreignKey: "order_id" })
      this.hasMany(MenuOrder, { foreignKey: "menu_id" })
    }
  }
  Menu.init(
    {
      mealName: DataTypes.STRING,
      price: DataTypes.FLOAT,
      is_available: DataTypes.BOOLEAN,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Menu",
    }
  )
  return Menu
}
