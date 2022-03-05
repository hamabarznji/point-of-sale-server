const Transaction = require("../models/Transaction");
const Store = require("../models/Store");
const Product = require("../models/Product");
async function addTransaction(transaction) {
    try {
        return await Transaction.create(transaction);
    } catch (err) {
        return err.message;
    }
}
async function updateTransaction(transaction) {
    try {
        return await Transaction.update(transaction, {
            where: { id: transaction.id },
        });
    } catch (err) {
        return err.message;
    }
}
async function deleteTransaction(transaction) {
    try {
        return await Transaction.destroy(transaction, {
            where: { id: transaction.id },
        });
    } catch (err) {
        return err.message;
    }
}

async function getTransactions() {
    try {
        return await Transaction.findAll();
    } catch (err) {
        return err.message;
    }
}
async function getTransaction(id) {
    try {
        return await Transaction.findOne({ id: id });
    } catch (err) {
        return err.message;
    }
}

async function getAllTransactionsWithAssociatedTables() {
    try {
        //get the store name from Store and Product name from Prodcut
        return await Transaction.findAll({ include: { all: true } });
    } catch (err) {
        return err.message;
    }
}

module.exports = {
    addTransaction,
    updateTransaction,
    deleteTransaction,
    getTransactions,
    getTransaction,
    getAllTransactionsWithAssociatedTables,
};
