'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        id: "09f75887-b9ce-459a-8934-0d5b6e1af8ad",
        firstName: "Roo",
        lastName: "Turturro",
        phone: "+542676012489",
        email: "roci1245@gmail.com",
        address: "AV buenos aires 24-758",
        password: "vnvolnvñoirvnkjfvjhvfvnhhvb",
        isAdmin: true,
        state: "activo",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      /* {
      firstName:,
      lastName:,
      phone:,
      email:,
      address:,
      password:,
      isAdmin: true,
      state:,
      createdAt: new Date(),
      updatedAt: new Date(),
      deleteAt: null
    } */
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
    await queryInterface.bulkDelete("Users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
