const server = require("./src/app");
require("dotenv").config();
const { sequelize } = require("./src/database/models/index.js");
const port = process.env.PORT || 3001;

const conectionTest = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conection ok");
    server.listen(port, () => {
      port
        ? console.log(`Se conecto al localhost:${port}`)
        : console.log(`No fue posible conexion a localhost:${port}`);
    });
  } catch (error) {
    console.log("Error en la conxion !!!", error);
  }
};

conectionTest();
