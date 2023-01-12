const {DataTypes} = require('sequelize');
module.exports = (sequelize) =>{
    sequelize.define('Order', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        delivered:{
            type:DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull:false,
        },
        total:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        timestamps: false,
    })
}