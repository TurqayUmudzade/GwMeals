"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("menus", [
      {
        id: 1,
        mealName: "Dolma",
        price: 9.99,
        is_available: true,
        image:
          "https://www.unicornsinthekitchen.com/wp-content/uploads/2022/01/Turkish-dolma-4.1200px.jpg",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        id: 2,
        mealName: "Doner",
        price: 2.99,
        is_available: true,
        image: "https://anadolu.az/image/cache/data/Doner%20turk-400x400.jpg",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        id: 3,
        mealName: "Burger",
        price: 5.99,
        is_available: true,
        image:
          "https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/1:1/w_1920,c_limit/basically-burger-1.jpg",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        id: 4,
        mealName: "Kebab",
        price: 29.99,
        is_available: true,
        image:
          "https://img.acunn.com/uploads/icerikler/2020/10/10/adana-kebap-tarifi15839585245f820001272d7.jpg",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        id: 5,
        mealName: "Steak",
        price: 39.99,
        is_available: true,
        image:
          "https://img.taste.com.au/d-poOSFk/w643-h428-cfill-q90/taste/2016/11/paprika-beef-steaks-with-chimichurri-sauce-and-wedges-102931-1.jpeg",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("menus", null, {})
  },
}
