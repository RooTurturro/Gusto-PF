'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        /* allowNull: false, */
        /* autoIncrement: true, */
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        /* notEmpty: true, */
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        /* notEmpty: true, */
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
        /* isInt: true, */
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        /* isEmail: true, */
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isAdmin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};