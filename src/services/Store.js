const Store = require("../models/Store");

async function getStores() {
    try {
        return await Store.findAll();
    } catch (err) {
        return err.message;
    }
}

async function addStore(store) {
    try {
        return await Store.create(store);
    } catch (err) {
        return err.message;
    }
}

module.exports = {
    addStore,
    getStores,
};
