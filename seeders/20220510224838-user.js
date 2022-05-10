'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        username: "turqay17",
        email: "somemeail@gwui",
        phone_number: "+0323213",
        password: "dsadsad",
        updatedAt: new Date(),
        createdAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};