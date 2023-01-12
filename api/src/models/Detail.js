const {DataTypes} = require('sequelize');
module.exports = (sequelize) =>{
    sequelize.define('Detail', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        subtotal: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        specification:{
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false
    })
}