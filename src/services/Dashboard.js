const Order = require("../models/Order");
const Product = require("../models/Product");
const Customer = require("../models/Customer");
const OrderedProduct = require("../models/OrderedProduct");
const TransfareedProduct = require("../services/TransfareedProduct");
const Sequelize = require("sequelize");
async function dashboardReport(storeid) {
    try {
        if (storeid == 0) {
            const customers = await Customer.findAll({});
            const transfareedProducts =
                await TransfareedProduct.getAllTransfareedProductsWithAssociatedTables();
            const orders = await Order.findAll({
                include: { all: true },
            });
            const products = await Product.findAll({
                where: {
                    [Sequelize.Op.or]: {
                        qty: {
                            [Sequelize.Op.gt]: 0,
                        },
                        weight: {
                            [Sequelize.Op.gt]: 0,
                        },
                    },
                },
            });
            return { customers, products, orders, transfareedProducts };
        } else {
            const customers = await Customer.findAll({
                where: { store_id: storeid },
            });
            const transfareedProducts =
                await TransfareedProduct.getAllTransfareedProductsWithAssociatedTables(
                    storeid
                );
            const orders = await Order.findAll({
                where: { store_id: storeid },
                include: { all: true },
            });
            const products = await Product.findAll({
                where: {
                    [Sequelize.Op.or]: {
                        qty: {
                            [Sequelize.Op.gt]: 0,
                        },
                        weight: {
                            [Sequelize.Op.gt]: 0,
                        },
                    },
                },
            });
            return { customers, products, orders, transfareedProducts };
        }
    } catch (error) {
        res.send(error);
    }
}

module.exports = { dashboardReport };
