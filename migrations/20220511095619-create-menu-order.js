"use strict"
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("MenuOrders", {
      menu_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      order_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("MenuOrders")
  },
}
