const Order = require("../models/Order");

async function addOrder(order) {
    try {
        return await Order.create(order);
    } catch (err) {
        return err.message;
    }
}
async function getOrders(storeid) {
    try {
        return await Order.findAll({
            include: { all: true },
            where: { store_id: storeid },
        });
    } catch (err) {
        return err.message;
    }
}

async function getOrdersByCustomerId(customer_phone) {
    try {
        return await Order.findAll({
            include: { all: true },
            where: { customer_phone: customer_phone },
        });
    } catch (err) {
        return err.message;
    }
}
async function getOrder(id) {
    try {
        return await Order.findOne({ where: { id: id } });
    } catch (err) {
        return err.message;
    }
}

module.exports = { addOrder, getOrders, getOrder, getOrdersByCustomerId };
