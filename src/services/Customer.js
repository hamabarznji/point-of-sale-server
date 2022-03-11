const Customer = require("../models/Customer");

async function addCustomer(customer) {
    console.log(customer);
    try {
        return await Customer.create({
            id: customer.id,
            name: customer.name,
            address: customer.address,
            store_id: customer.store_id,
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
async function getCustomersForSpecificStore(storeid) {
    try {
        return await Customer.findAll({
            where: { store_id: storeid },
        });
    } catch (err) {
        return err.message;
    }
}
async function updateCustomer(customer) {
    try {
        return await Customer.update(
            {
                id: customer.newId,
                name: customer.name,
                address: customer.address,
                store_id: customer.store_id,
            },
            { where: { id: customer.id } }
        );
    } catch (err) {
        return err.message;
    }
}

module.exports = {
    addCustomer,
    getCustomer,
    getCustomers,
    updateCustomer,
    getCustomersForSpecificStore,
};
