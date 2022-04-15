const Order = require("../services/Order");
const { totalPriceCalculator } = require("../helper/reuseableFuncctions");
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

async function getOrdersByCustomerId(req, res, next) {
    try {
        const data = await Order.getOrdersByCustomerId(
            req.params.customerphone
        );
        const orders = data.map((order) => {
            return {
                orderedProducts: order.ordereded_products,
                description: order.description,
                customerName: order.customer.name,
                customerPhone: order.customer_phone,
                date: order.date,
                orderId: order.id,
                payments: order.payments,

                totalAmount: order.ordereded_products.reduce(
                    (sum, orderedProduct) => {
                        return (
                            sum +
                            totalPriceCalculator(
                                orderedProduct.price,
                                orderedProduct.weight,
                                orderedProduct.qty
                            )
                        );
                    },
                    0
                ),
                totalPaidAmount: order.payments.reduce(
                    (sum, payment) => sum + payment.amount,
                    0
                ),
            };
        });
        res.status(200).send(orders);
    } catch (erorr) {
        return erorr.message;
    }
}

async function getOrders(req, res, next) {
    try {
        const data = await Order.getOrders(req.params.storeid);
        const orders = data?.map((order) => {
            return {
                orderId: order.id,
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

                totalAmount: order.ordereded_products.reduce(
                    (sum, orderedProduct) => {
                        return (
                            sum +
                            totalPriceCalculator(
                                orderedProduct.price,
                                orderedProduct.weight,
                                orderedProduct.qty
                            )
                        );
                    },
                    0
                ),
                payments: order.payments.map((payment) => {
                    return {
                        id: payment.id,
                        date: payment.paid_date,
                        amount: payment.amount,
                    };
                }),

                totalPaidAmount: order.payments.reduce(
                    (sum, payment) => sum + payment.amount,
                    0
                ),
            };
        });
        const totalSales = orders.reduce(
            (sum, order) => sum + order.totalAmount,
            0
        );
        res.status(200).send({
            orders,
            totalSales,
            numberOfOrders: orders.length,
        });
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}
module.exports = { addOrder, getOrder, getOrders, getOrdersByCustomerId };
