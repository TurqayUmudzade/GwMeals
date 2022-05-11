'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('payments', [
      {
        id: 1,
        amount: 9.99,
        updatedAt: new Date(),
        createdAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('payments', null, {});
  }
};