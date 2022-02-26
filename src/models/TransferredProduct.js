const sequelize = require("../../db");
const Sequelize = require("sequelize");
const Product = require("./Product");
const Store = require("./Store");

const TransferredProduct = sequelize.define(
    "transferred_product",
    {
        id: {
            type: Sequelize.INTEGER(13),
            autoIncrement: false,
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

        qty_or_weight: {
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
TransferredProduct.sync({ altered: true })
    .then((data) => console.log(data, "Transferred Product table created"))
    .catch((err) => console.log(err));

module.exports = TransferredProduct;
