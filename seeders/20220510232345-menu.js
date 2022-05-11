'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('menus', [
      {
        id: 1,
        mealName: "Dolma",
        price: 9.99,
        is_available: true,
        image: "https://www.unicornsinthekitchen.com/wp-content/uploads/2022/01/Turkish-dolma-4.1200px.jpg",
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        id: 2,
        mealName: "Doner",
        price: 2.99,
        is_available: true,
        image: "https://www.unicornsinthekitchen.com/wp-content/uploads/2022/01/Turkish-dolma-4.1200px.jpg",
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        id: 3,
        mealName: "Burger",
        price: 5.99,
        is_available: true,
        image: "https://www.unicornsinthekitchen.com/wp-content/uploads/2022/01/Turkish-dolma-4.1200px.jpg",
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        id: 4,
        mealName: "Kebab",
        price: 29.99,
        is_available: true,
        image: "https://www.unicornsinthekitchen.com/wp-content/uploads/2022/01/Turkish-dolma-4.1200px.jpg",
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        id: 5,
        mealName: "Steak",
        price: 39.99,
        is_available: true,
        image: "https://www.unicornsinthekitchen.com/wp-content/uploads/2022/01/Turkish-dolma-4.1200px.jpg",
        updatedAt: new Date(),
        createdAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('menus', null, {});
  }
};