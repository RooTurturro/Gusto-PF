'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Toppings", [
      {
        id: "8fbd6e67-db1f-4fda-8cf1-d954531a82d1",
        name: "Bacon",
        price: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "c7c97b88-8412-4015-99f7-9d776f323e4d",
        name: "Lechuga",
        price: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "232d1c12-d1a7-44e0-b408-3816b8053fea",
        name: "Tomate",
        price: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "099419c5-06ea-4c9c-a43d-83cc02c7131b",
        name: "Cebolla Morada",
        price: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "71d7a4ce-6f50-45ea-9ad9-d711931492b8",
        name: "Cebolla Caramelizada",
        price: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "aa4fc830-323c-4926-b380-823c0161ea5d",
        name: "Salsa Wonder",
        price: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "95f1eb65-535b-4e42-ae2b-4f1ef1cfb7e2",
        name: "Salsa Gusto",
        price: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "ef009eb1-2c26-47c9-bbb4-55238997b523",
        name: "Salsa de la casa",
        price: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "ae2b4cfd-5757-4441-9a49-272d93239412",
        name: "Mayonesa",
        price: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "eeef5b40-89fe-4fe5-b0ec-7e6bd91936e8",
        name: "Salsa de tomate",
        price: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "29b7163f-4409-4247-aa1a-732dc6b920ad",
        name: "Salsa BBQ",
        price: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "f5dc8738-e951-460f-9e75-dbca3d9dff46",
        name: "Salsa dulce maiz",
        price: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "9e61ae8d-e776-4f27-92af-42ade8fbff8c",
        name: "Ketchup",
        price: 40,
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
    await queryInterface.bulkDelete("Toppings", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
