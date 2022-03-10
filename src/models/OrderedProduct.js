const sequelize = require("../../db");
const Sequelize = require("sequelize");
const Order = require("./Order");
const TransfareedProduct = require("./TransfareedProduct");
const Product = require("./Product");
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
        TransfareedProduct_id: {
            type: Sequelize.INTEGER(13),
            allowNull: false,
            references: {
                model: TransfareedProduct,
                field: "id",
            },
        },

        qty: {
            type: Sequelize.INTEGER(10),
        },
        weight: {
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

//association
OrderedProduct.belongsTo(Order, { foreignKey: "order_id", targetKey: "id" });
OrderedProduct.belongsTo(TransfareedProduct, {
    foreignKey: "transfareedProduct_id",
    targetKey: "id",
});
TransfareedProduct.hasMany(OrderedProduct, {
    foreignKey: "transfareedProduct_id",
    sourceKey: "id",
});
Order.hasMany(OrderedProduct, {
    foreignKey: "order_id",
    sourceKey: "id",
});

OrderedProduct.sync({ alter: true })
    .then((data) =>
        console.log(data, "Ordereded Product Product table created")
    )
    .catch((err) => console.log(err));

module.exports = OrderedProduct;
