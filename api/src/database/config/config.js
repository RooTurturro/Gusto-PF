require("dotenv").config();

module.exports = {
  //Configuracion DB
  development: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || "5432",
    dialect: "postgres",
  },
  //Configuracion seeders
  /* seederStorage: "sequelize",
  seederStorageTableName: "seeds", */
  //Configuracion Migraciones
  /* migrationStorage: "sequelize",
  migrationStorageTableName: "migrations", */
  /* "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }, */
  production: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || "5432",
    dialect: "postgres",
  },
};
