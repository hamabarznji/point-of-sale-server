const sequelize = require("../../db");
const Sequelize = require("sequelize");
const Product = require("./Product");
const Store = require("./Store");

const TransfareedProduct = sequelize.define(
    "Transfareed_Product",
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
Store.hasMany(TransfareedProduct, { foreignKey: "store_id", sourceKey: "id" });
TransfareedProduct.belongsTo(Store, {
    foreignKey: "store_id",
    targetKey: "id",
});

Product.hasMany(TransfareedProduct, {
    foreignKey: "product_id",
    sourceKey: "id",
});
TransfareedProduct.belongsTo(Product, {
    foreignKey: "product_id",
    targetKey: "id",
});
TransfareedProduct.sync({ alter: true })
    .then((data) => console.log(data, "Transfareed Product table created"))
    .catch((err) => console.log(err));

module.exports = TransfareedProduct;
