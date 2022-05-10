'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ordertypes', [
      {
        id: 1,
        name: "online",
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        id: 2,
        name: "phone",
        updatedAt: new Date(),
        createdAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ordertypes', null, {});
  }
};