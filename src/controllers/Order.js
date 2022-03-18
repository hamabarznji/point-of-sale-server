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
                date: order.date,
                storeId: order.store_id,
                storeName: order.store.name,
                userId: order.user_id,
                userName: order.user.username,
                customerName: order.customer.name,
                customerPhone: order.customer_phone,
                description: order.description,
                orderededProducts: order.ordereded_products.map(
                    (orderedProduct) => {
                        return {
                            id: orderedProduct.id,
                            qty: orderedProduct.qty,
                            weight: orderedProduct.weight,
                            price: orderedProduct.price,
                            transfareedProductId:
                                orderedProduct.transfareedProduct_id,
                        };
                    }
                ),
                payments: order.payments.map((payment) => {
                    return {
                        id: payment.id,
                        date: payment.paid_date,
                        amount: payment.amount,
                    };
                }),
            };
        });
        const { orderedProducts, payments } = orders;
        res.status(200).send(orders);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}
module.exports = { addOrder, getOrder, getOrders };
