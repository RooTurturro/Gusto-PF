const {DataTypes} = require('sequelize');
module.exports = (sequelize) =>{
    sequelize.define('Purchase', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
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
        state:{
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
    {
        timestamps: false
    })
}