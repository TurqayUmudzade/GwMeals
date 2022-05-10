'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('addresses', [
      {
        id: 1,
        street: "Azadliq 151 a",
        userId: "1",
        updatedAt: new Date(),
        createdAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('addresses', null, {});
  }
};