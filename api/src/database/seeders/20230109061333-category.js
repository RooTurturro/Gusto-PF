'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories", [
      {
        id: "53a282ef-9317-4edf-acfb-2a7239221248",
        name: "Hamburguesas",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "35d5e957-d0f4-48e1-aac8-2f3cff221828",
        name: "Papas",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "80eca726-4eb0-4ecb-89de-4cddf9db9d59",
        name: "Snacks",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "730ddf22-581c-4c33-b6ba-ac3f85ec4fbb",
        name: "Wraps",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "e948e7bd-9d18-468a-b893-b00ab5bbbcd5",
        name: "Ensaladas",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "f84170fa-30b9-4301-a9ae-5ca7e66d1c64",
        name: "Promociones",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "e9af1e88-35bb-45a9-898b-909c63bf4e0b",
        name: "Bebidas",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "715c43e4-4597-4e8a-ab2a-6ec9546ea2aa",
        name: "Postres Süss",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
