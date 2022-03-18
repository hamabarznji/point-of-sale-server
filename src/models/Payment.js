const sequelize = require("../../db");
const Sequelize = require("sequelize");
const Order = require("./Order");

const Payment = sequelize.define(
    "payment",
    {
        id: {
            type: Sequelize.INTEGER(13),
            autoIncrement: true,
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
        amount: {
            type: Sequelize.DOUBLE(10, 2),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        paid_date: {
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
Payment.belongsTo(Order, { foreignKey: "order_id" });
Order.hasMany(Payment, { foreignKey: "order_id" });
Payment.sync()
    .then((data) => console.log(data, "Payment table created"))
    .catch((err) => console.log(err));

module.exports = Payment;
