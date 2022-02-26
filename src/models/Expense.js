const sequelize = require("../../db");
const Sequelize = require("sequelize");
const Store = require("./Store");
const Expense = sequelize.define(
    "expense",
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

        description: {
            type: Sequelize.STRING(50),
            allowNull: true,

            validate: {
                notEmpty: true,
            },
        },
        amount: {
            type: Sequelize.DOUBLE(10, 2),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        date: {
            type: Sequelize.DATE(),
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
Expense.sync()
    .then((data) => console.log(data, "Expense table created"))
    .catch((err) => console.log(err));

module.exports = Expense;
