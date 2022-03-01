const Supplier = require("../models/Supplier");

async function addSupplier(supplier) {
    try {
        return await Supplier.create(supplier);
    } catch (err) {
        return err.message;
    }
}

async function getSuppliers() {
    try {
        return await Supplier.findAll();
    } catch (err) {
        return err.message;
    }
}

module.exports = { addSupplier, getSuppliers };
