const sequelize = require("../../db");
const Sequelize = require("sequelize");
const Supplier = require("./Supplier");
const Category = require("./Category");
const Product = sequelize.define(
    "product",
    {
        id: {
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
        supplier_id: {
            type: Sequelize.INTEGER(2),
            allowNull: false,
            references: {
                model: Supplier,
                field: "id",
            },
        },
        category_id: {
            type: Sequelize.INTEGER(2),
            allowNull: false,
            references: {
                model: Category,
                field: "id",
            },
        },
        price: {
            type: Sequelize.DOUBLE(),
            allowNull: false,
        },
        qty: {
            type: Sequelize.INTEGER(10),
        },
        size: {
            type: Sequelize.STRING(25),
        },
        color: {
            type: Sequelize.STRING(10),
        },
        weight: {
            type: Sequelize.DOUBLE(),
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
Product.sync({ forceUpdate: true })
    .then((data) => console.log(data, "Product table created"))
    .catch((err) => console.log(err));

module.exports = Product;
