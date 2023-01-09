'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        id: "3460fafc-e008-4f6d-8df2-63f59be96c53",
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
