const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define(
		"Product",
		{
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
			description: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			price: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			rating: {
				type: DataTypes.INTEGER,
				validate: {
					min: 1,
					max: 5,
				},
				defaultValue: 1,
			},
			totalRating: {
				type: DataTypes.INTEGER,
				defaultValue: 1,
			},
			image: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			state: {
				type: DataTypes.BOOLEAN,
				defaultValue: true,
				allowNull: false,
			},
			category: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			timestamps: false,
		}
	);
};

