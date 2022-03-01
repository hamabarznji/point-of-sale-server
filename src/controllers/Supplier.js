const Supplier = require("../services/Supplier");

async function addSupplier(req, res, next) {
    try {
        const supplier = await Supplier.addSupplier(req.body);

        res.status(200).send(supplier);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

async function getSuppliers(req, res, next) {
    try {
        const suppliers = await Supplier.getSuppliers();

        res.status(200).send(suppliers);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

module.exports = { addSupplier, getSuppliers };
