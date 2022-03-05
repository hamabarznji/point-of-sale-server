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
        const data = await Order.getOrders();
        const orders = data.map((order) => {
            return {
                id: order.id,
                storeName: order.store.name,
                userName: order.user.name,
                customerName: order.customer.name,
                store_id: order.store_id,
                user_id: order.user_id,
                customer_phone: order.customer_phone,
                description: order.description,
                date: order.date,
            };
        });
        res.status(200).send(orders);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}
module.exports = { addOrder, getOrder, getOrders };
