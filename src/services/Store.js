const Store = require("../models/Store");
const TransfareedProduct = require("../models/TransfareedProduct");
const Sequelize = require("sequelize");

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

async function storeReport(fromDate, toDate, id) {
    try {
        return await TransfareedProduct.findAll({
            include: { all: true },
            where: {
                store_id: id,
                date: {
                    [Sequelize.Op.between]: [fromDate, toDate],
                },
            },
        });
    } catch (err) {
        return err.message;
    }
}
async function storeReportById(id) {
    try {
        return await Store.findAll({
            include: { all: true },
            where: {
                id: id,
            },
        });
    } catch (err) {
        return err.message;
    }
}
module.exports = {
    addStore,
    getStores,
    getStore,
    updateStore,
    storeReport,
    storeReportById,
};
