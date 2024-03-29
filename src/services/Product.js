const Product = require("../models/Product");

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
    console.log(id);
    try {
        return await Product.findOne({
            include: { all: true },
            where: { id: id },
        });
    } catch (err) {
        return err.message;
    }
}

module.exports = { addProduct, getProducts, updateProduct, getProduct };
