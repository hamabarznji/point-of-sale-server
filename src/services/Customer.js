const Customer = require("../models/Customer");

async function addCustomer({ id, name, store_id, address } = {}) {
    try {
        return await Customer.create({
            id,
            store_id,
            name,
            address,
        });
    } catch (err) {
        return err.message;
    }
}

async function getCustomers() {
    try {
        return await Customer.findAll();
    } catch (err) {
        return err.message;
    }
}

async function getCustomer(id) {
    try {
        return await Customer.findOne({ where: { id: id } });
    } catch (err) {
        return err.message;
    }
}
async function updateCustomer({ id, name, store_id, address } = {}) {
    try {
        return await Customer.update(
            {
                id,
                name,
                store_id,
                address,
            },
            { where: { id: id } }
        );
    } catch (err) {
        return err.message;
    }
}

module.exports = { addCustomer, getCustomer, getCustomers, updateCustomer };
