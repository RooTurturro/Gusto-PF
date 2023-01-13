const {DataTypes} = require('sequelize');
module.exports = (sequelize) =>{
    sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
       
        phone: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull:true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull:true,
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        timestamps: false
    })
}