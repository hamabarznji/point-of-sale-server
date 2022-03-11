const Store = require("../models/Store");

async function getStores() {
    try {
        return await Store.findAll();
    } catch (err) {
        return err.message;
    }
}

async function getStore(id) {
    try {
        return await Store.findOne({ where: { id: id } });
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

async function updateStore(store) {
    console.log(store);

    try {
        return await Store.update(store, { where: { id: store.id } });
    } catch (err) {
        return err.message;
    }
}

module.exports = {
    addStore,
    getStores,
    getStore,
    updateStore,
};
