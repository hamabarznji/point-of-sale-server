const sequelize = require("../../db");
const Sequelize = require("sequelize");
const Store = require("./Store");

const Customer = sequelize.define(
    "customer",
    {
        id: {
            //phone number
            type: Sequelize.INTEGER(13),
            autoIncrement: false,
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
        store_id: {
            type: Sequelize.INTEGER(13),
            allowNull: false,
            references: {
                model: Store,
                field: "id",
            },
        },
        address: {
            type: Sequelize.STRING(25),
            allowNull: true,
        },
    },

    {
        freezeTableName: true,
        timestamps: false,
    }
);
Customer.sync({ alter: true })
    .then((data) => console.log("Customer table created"))
    .catch((err) => console.log(err));

module.exports = Customer;
