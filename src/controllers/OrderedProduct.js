const OrderedProduct = require("../services/OrderedProduct");

async function getOrderedProduct(id) {
    try {
        return await OrderedProduct.getOrderedProduct(id);
    } catch (err) {
        return err.message;
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
        return await OrderedProduct.addOrderedProduct(req.body);
    } catch (err) {
        return err.message;
    }
}

module.exports = { getOrderedProduct, getOrderedProducts, addOrderedProduct };
