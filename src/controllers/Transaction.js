const Transaction = require("../services/Transaction");

async function addTransaction(req, res, next) {
    try {
        const transaction = await Transaction.addTransaction(req.body);
        res.status(200).send(transaction);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}
async function updateTransaction(req, res, next) {
    try {
        const updatedTransaction = await Transaction.updateTransaction(
            req.body
        );

        res.status(200).send(updatedTransaction);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

async function getTransactions(req, res, next) {
    try {
        const transactions = await Transaction.getTransactions();

        res.status(200).send(transactions);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}
async function getTransaction(req, res, next) {
    try {
        const transaction = await Transaction.getTransaction(req.params.id);

        res.status(200).send(transaction);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}
async function getAllTransactionsWithAssociatedTables(req, res, next) {
    try {
        const transactions =
            await Transaction.getAllTransactionsWithAssociatedTables();
        const allTransactions = transactions.map((transaction) => {
            return {
                id: transaction.id,
                store_id: transaction.store_id,
                product_id: transaction.product_id,
                qty: transaction.qty,
                weight: transaction.weight,
                date: transaction.date,
                storeName: transaction.store.name,
                productName: transaction.product.name,
            };
        });
        res.status(200).send(allTransactions);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

module.exports = {
    addTransaction,
    updateTransaction,
    getTransactions,
    getTransaction,
    getAllTransactionsWithAssociatedTables,
};
