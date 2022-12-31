"use strict"; //No permite el uso de variables no definidas

module.exports = (sequelize, DataTypes) => {
  let user = sequelize.define(
    "user",
    {
      id: {
        //Nobre de la columna
        type: DataTypes.BIGINT, //Tipo de dato
        autoIncrement: true, //Auto incrementable
        primaryKey: true, //Clave primaria
        allowNull: false, //No permite nulo
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      edad: {
        type: DataTypes.INTEGER,
      },
      celular: {
        type: DataTypes.INTEGER,
      },
      createdAd: {
        //Fecha de creacion
        type: DataTypes.DATE,
        field: "created_at",
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: "deleted_at",
      },
    },
    {
      paranoid: true, //Elimina registros de forma logica
      freezeTableName: true, //Evita que se cambie el nombre de la tabla a plural
    }
  );

  user.associate = (models) => {
    //Aca van las relaciones de las tablas
  };

  return user;
};
