const Customer = require("../models/Customer");
const Order = require("../models/Order");
const Sequelize = require("sequelize");
async function addCustomer(customer) {
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

async function getCustomers(storeid) {
    try {
        if (storeid == "null" || storeid == null) {
            return await Customer.findAll({
                include: { all: true },
            });
        } else {
            return await Customer.findAll({
                include: { all: true },
                where: { store_id: storeid },
            });
        }
    } catch (err) {
        return err.message;
    }
}

async function getCustomer(id) {
    try {
        return await Customer.findOne({
            include: { all: true },
            where: { id: id },
        });
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

async function debtReport(fromDate, toDate, storeid) {
    try {
        return await Order.findAll({
            include: { all: true },
            where: {
                date: {
                    [Sequelize.Op.between]: ["2022-03-15", "2022-04-06"],
                },
                store_id: 1,
            },
        });
    } catch (err) {
        return err.message;
    }
}

async function customerReport(id) {
    try {
        return await Order.findAll({
            include: { all: true },
            where: {
                customer_phone: id,
            },
        });
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
    debtReport,
    customerReport,
};
