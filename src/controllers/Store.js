const Store = require("../services/Store");

async function addStore(req, res, next) {
    try {
        const store = await Store.addStore(req.body, req);

        res.status(200).send(store);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

async function getStores(req, res, next) {
    try {
        const stores = await Store.getStores();

        res.status(200).send(stores);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

module.exports = {
    addStore,
    getStores,
};
