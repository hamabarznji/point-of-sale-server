const sequelize = require("../../db");
const Sequelize = require("sequelize");
const Store = require("./Store");
const User = sequelize.define(
    "user",
    {
        id: {
            type: Sequelize.INTEGER(13),
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        username: {
            type: Sequelize.STRING(25),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        password: {
            type: Sequelize.STRING(100),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        role: {
            type: Sequelize.STRING(10),
            allowNull: false,
            defaultValue: "accountant",
        },
        store_id: {
            type: Sequelize.INTEGER(2),
            allowNull: false,
            references: {
                model: Store,
            },
        },
    },

    {
        freezeTableName: true,
        timestamps: false,
    }
);
User.sync({ alter: true })
    .then((data) => console.log(data, "User table created"))
    .catch((err) => console.log(err));

module.exports = User;
