const OrderedProduct = require("../services/OrderedProduct");
const Order = require("../services/Order");
const Payment = require("../services/Payment");

async function getOrderedProduct(id) {
    try {
        return await OrderedProduct.getOrderedProduct(id);
    } catch (err) {
        return err.message;
    }
}

//getAll
async function getAll(req, res, next) {
    try {
        const orderedProducts = await OrderedProduct.getAll();
        res.status(200).json(orderedProducts);
    } catch (err) {
        next(err);
    }
}

async function getOrderedProducts(req, res, next) {
    try {
        return await OrderedProduct.getOrderedProducts();
    } catch (err) {
        return err.message;
    }
}

async function addOrderedProduct(req, res, next) {
    try {
        const { ops, orderInfo, paymentInfo } = req.body;
        const order = await Order.addOrder(orderInfo);
        const { id } = order;
        const orderedProductsInfo = ops.map((item) => {
            return {
                order_id: id,
                transfareedProduct_id: 1,
                qty: item.qty,
                weight: item.weight,
                price: item.price,
            };
        });
        const orderedProducts = await OrderedProduct.addOrderedProduct(
            orderedProductsInfo
        );

        await Payment.addPayment({
            order_id: id,
            ...paymentInfo,
        });
        res.status(200).json(orderedProducts);
    } catch (err) {
        return err.message;
    }
}

async function updateOrderedProduct(req, res, next) {
    try {
        return await OrderedProduct.updateOrderedProduct(req.body);
    } catch (err) {
        return err.message;
    }
}

module.exports = {
    getOrderedProduct,
    getOrderedProducts,
    addOrderedProduct,
    getAll,
    updateOrderedProduct,
};
