const sequelize = require("../../db");
const Sequelize = require("sequelize");

const Supplier = sequelize.define(
    "supplier",
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

        phone: {
            type: Sequelize.INTEGER(13),
            allowNull: false,

            validate: {
                notEmpty: true,
            },
        },
        address: {
            type: Sequelize.STRING(25),
        },
    },

    {
        freezeTableName: true,
        timestamps: false,
    }
);
Supplier.sync()
    .then((data) => console.log("Supplier table created"))
    .catch((err) => console.log(err));

module.exports = Supplier;
