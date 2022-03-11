const Ordere = require("../models/Order");

async function addOrder(order) {
    try {
        return await Ordere.create(order);
    } catch (err) {
        return err.message;
    }
}
async function getOrders() {
    try {
        return await Ordere.findAll({ include: { all: true } });
    } catch (err) {
        return err.message;
    }
}
async function getOrder(id) {
    try {
        return await Ordere.findOne({ where: { id: id } });
    } catch (err) {
        return err.message;
    }
}

module.exports = { addOrder, getOrders, getOrder };
