const Order = require("../services/Order");

async function addOrder(req, res, next) {
    try {
        const order = await Order.addOrder(req.body);

        res.status(200).send(order);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

async function getOrder(req, res, next) {
    try {
        const order = await Order.getOrder(req.params.id);

        res.status(200).send(order);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}
async function getOrders(req, res, next) {
    try {
        const orders = await Order.getOrders();

        res.status(200).send(orders);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}
module.exports = { addOrder, getOrder, getOrders };
