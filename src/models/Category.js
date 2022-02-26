const sequelize = require("../../db");
const Sequelize = require("sequelize");

const Category = sequelize.define(
    "category",
    {
        id: {
            type: Sequelize.INTEGER(13),
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING(25),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    },

    {
        freezeTableName: true,
        timestamps: false,
    }
);
Category.sync()
    .then((data) => console.log(data, "Category table created"))
    .catch((err) => console.log(err));

module.exports = Category;
