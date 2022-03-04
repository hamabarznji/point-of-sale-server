const sequelize = require("../../db");
const Sequelize = require("sequelize");
const Product = require("./Product");
const Store = require("./Store");

const Transaction = sequelize.define(
    "transaction",
    {
        id: {
            type: Sequelize.INTEGER(13),
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        store_id: {
            type: Sequelize.INTEGER(13),
            allowNull: false,
            references: {
                model: Store,
                field: "id",
            },
        },
        product_id: {
            type: Sequelize.INTEGER(13),
            allowNull: false,
            references: {
                model: Product,
                field: "id",
            },
        },

        weight: {
            type: Sequelize.INTEGER(10),
        },
        qty: {
            type: Sequelize.INTEGER(10),
        },

        date: {
            type: Sequelize.DATE(),
            allowNull: false,
        },
    },

    {
        freezeTableName: true,
        timestamps: false,
    }
);
Transaction.sync({ alter: true })
    .then((data) => console.log(data, "Transaction table created"))
    .catch((err) => console.log(err));

module.exports = Transaction;
