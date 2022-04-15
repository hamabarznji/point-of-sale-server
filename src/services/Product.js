const Product = require("../models/Product");
const Sequelize = require("sequelize");
const { Op } = require("sequelize");
async function addProduct(product) {
    try {
        return await Product.create(product);
    } catch (err) {
        return err.message;
    }
}
async function updateProduct(product) {
    try {
        return await Product.update(product, { where: { id: product.id } });
    } catch (err) {
        return err.message;
    }
}

async function getProducts() {
    try {
        return await Product.findAll({ include: { all: true } });
    } catch (err) {
        return err.message;
    }
}
async function getProduct(id) {
    try {
        return await Product.findOne({
            include: { all: true },
            where: { id: id },
        });
    } catch (err) {
        return err.message;
    }
}

async function productsReport(fromDate, toDate) {
    try {
        return await Product.findAll({
            include: { all: true },
            where: {
                date: {
                    [Sequelize.Op.between]: [fromDate, toDate],
                },
            },
        });
    } catch (err) {
        return err.message;
    }
}

module.exports = {
    addProduct,
    getProducts,
    updateProduct,
    getProduct,
    productsReport,
};
