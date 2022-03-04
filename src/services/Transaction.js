const Transaction = require("../models/Transaction");

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

module.exports = {
    addTransaction,
    updateTransaction,
    deleteTransaction,
    getTransactions,
    getTransaction,
};
