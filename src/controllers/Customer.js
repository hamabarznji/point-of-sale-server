const Customer = require("../services/Customer");

async function addCustomer(req, res, next) {
    try {
        const customer = await Customer.addCustomer({
            id: req.body.id,
            name: req.body.name,
            store_id: req.body.store_id,
            address: req.body.address,
        });

        res.status(200).send(customer);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

async function getCustomers(req, res, next) {
    try {
        const customers = await Customer.getCustomers();

        res.status(200).send(customers);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}
async function getCustomer(req, res, next) {
    try {
        const customers = await Customer.getCustomer(req.params.id);

        res.status(200).send(customers);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}
async function updateCustomer(req, res, next) {
    try {
        const customer = await Customer.updateCustomer({
            id: req.body.id,
            name: req.body.name,
            address: req.body.address,
            store_id: req.body.supplier_id,
        });

        console.log("here");
        res.status(200).send(customer);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

module.exports = { addCustomer, getCustomers, getCustomer, updateCustomer };
