const OrderedProduct = require("../models/OrderedProduct");
const Sequelize = require("sequelize");

async function getOrderedProducts() {
    try {
        return await OrderedProduct.findAll();
    } catch (err) {
        return err.message;
    }
}
async function getOrderedproductsbyOrderId(orderId) {
    try {
        return await OrderedProduct.findAll({
            include: { all: true },
            where: { order_id: orderId },
        });
    } catch (err) {
        return err.message;
    }
}

//getAll
async function getAll() {
    try {
        return await OrderedProduct.findAll({ include: { all: true } });
    } catch (err) {
        return err.message;
    }
}

async function getOrderedProduct(id) {
    try {
        return await OrderedProduct.findOne({ where: { id: id } });
    } catch (err) {
        return err.message;
    }
}

async function addOrderedProduct(product) {
    try {
        return await OrderedProduct.bulkCreate(product);
    } catch (err) {
        return err.message;
    }
}

async function updateOrderedProduct(product) {
    try {
        return await OrderedProduct.update(product, {
            where: { id: product.id },
        });
    } catch (err) {
        return err.message;
    }
}
async function report() {
    try {
        return await OrderedProduct.findOne({
            where: {
                store_id: 1,
                date: {
                    [Sequelize.Op.between]: ["2022-03-19", " 2022-03-26"],
                },
            },
        });
    } catch (err) {
        return err.message;
    }
}

async function getOrderedProductsbyId(id) {
    try {
        return await OrderedProduct.findAll({
            where: { order_id: id },
            include: { all: true },
        });
    } catch (err) {
        return err.message;
    }
}

module.exports = {
    getOrderedProducts,
    getOrderedProduct,
    addOrderedProduct,
    updateOrderedProduct,
    getAll,
    getOrderedproductsbyOrderId,
    report,
    getOrderedProductsbyId,
};
