const sequelize = require("../../db");
const Sequelize = require("sequelize");
const Order = require("./Order");
const TransfereedProduct = require("./TransferredProduct");
const OrderedProduct = sequelize.define(
    "ordereded_product",
    {
        id: {
            type: Sequelize.INTEGER(13),
            autoIncrement: false,
            allowNull: false,
            primaryKey: true,
        },
        order_id: {
            type: Sequelize.INTEGER(13),
            allowNull: false,
            references: {
                model: Order,
                field: "id",
            },
        },
        transfereed_product_id: {
            type: Sequelize.INTEGER(13),
            allowNull: false,
            references: {
                model: TransfereedProduct,
                field: "id",
            },
        },

        qty_or_weight: {
            type: Sequelize.INTEGER(10),
        },

        price: {
            type: Sequelize.DOUBLE(),
            allowNull: false,
        },
    },

    {
        freezeTableName: true,
        timestamps: false,
    }
);
OrderedProduct.sync({ alter: true })
    .then((data) =>
        console.log(data, "Ordereded Product Product table created")
    )
    .catch((err) => console.log(err));

module.exports = OrderedProduct;
