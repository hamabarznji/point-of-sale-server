const sequelize = require("../../db");
const Sequelize = require("sequelize");
const Store = require("./Store");
const User = require("./User");
const Customer = require("./Customer");
const Order = sequelize.define(
    "order_",
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
        user_id: {
            type: Sequelize.INTEGER(13),
            allowNull: false,
            references: {
                model: User,
                field: "id",
            },
        },
        customer_phone: {
            type: Sequelize.INTEGER(13),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            references: {
                model: Customer,
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

Order.belongsTo(Store, { foreignKey: "store_id", targetKey: "id" });
Order.belongsTo(User, { foreignKey: "user_id", targetKey: "id" });
Order.belongsTo(Customer, { foreignKey: "customer_phone", targetKey: "id" });

Store.hasMany(Order, { foreignKey: "store_id", sourceKey: "id" });
User.hasMany(Order, { foreignKey: "user_id", sourceKey: "id" });
Customer.hasMany(Order, { foreignKey: "customer_phone", sourceKey: "id" });

Order.sync({ alter: true })
    .then((data) => console.log(data, "Order table created"))
    .catch((err) => console.log(err));

module.exports = Order;
