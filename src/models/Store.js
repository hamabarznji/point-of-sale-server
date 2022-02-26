const sequelize = require("../../db");
const Sequelize = require("sequelize");

const Store = sequelize.define(
    "store",
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
        location: {
            type: Sequelize.STRING(25),
            allowNull: false,

            validate: {
                notEmpty: true,
            },
        },
        phone: {
            type: Sequelize.INTEGER(13),
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
Store.sync({ alter: true })
    .then((data) => console.log(data, "Store table created"))
    .catch((err) => console.log(err));

module.exports = Store;
