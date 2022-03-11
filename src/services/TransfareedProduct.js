const TransfareedProduct = require("../models/TransfareedProduct");

async function addTransfareedProductn(transfareedproduct) {
    try {
        return await TransfareedProduct.create(transfareedproduct);
    } catch (err) {
        return err.message;
    }
}
async function updateTransfareedProduct(transfareedproduct) {
    try {
        return await TransfareedProduct.update(transfareedproduct, {
            where: { id: transfareedproduct.id },
        });
    } catch (err) {
        return err.message;
    }
}
async function deleteTransfareedProduct(transfareedproduct) {
    try {
        return await TransfareedProduct.destroy(transfareedproduct, {
            where: { id: transfareedproduct.id },
        });
    } catch (err) {
        return err.message;
    }
}

async function getTransfareedProducts() {
    try {
        return await TransfareedProduct.findAll();
    } catch (err) {
        return err.message;
    }
}
async function getTransfareedProduct(id) {
    try {
        return await TransfareedProduct.findOne({ id: id });
    } catch (err) {
        return err.message;
    }
}

async function getAllTransfareedProductsWithAssociatedTables() {
    try {
        //get the store name from Store and Product name from Prodcut
        return await TransfareedProduct.findAll({ include: { all: true } });
    } catch (err) {
        return err.message;
    }
}

module.exports = {
    addTransfareedProductn,
    updateTransfareedProduct,
    deleteTransfareedProduct,
    getTransfareedProducts,
    getTransfareedProduct,
    getAllTransfareedProductsWithAssociatedTables,
};
