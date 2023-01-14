const {DataTypes} = require('sequelize');
module.exports = (sequelize) =>{
    sequelize.define('Purchase', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        lastname:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        address:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        products: {
            type: DataTypes.ARRAY(DataTypes.JSON),
            allowNull: false,
        },
        specification:{
            type: DataTypes.STRING,
        },
        total:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        takeAway:{
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull:false,
        },
        state:{
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
    {
        timestamps: false
    })
}