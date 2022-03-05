const router = require("express").Router();
const routes = require("../../routes.json");
const verifyAuth = require("../../middleware/verifyAuth");

const Transaction = require("../controllers/Transaction");

router.get(
    routes.transaction.getTransactions,
    verifyAuth,
    Transaction.getAllTransactionsWithAssociatedTables
);
router.get(
    routes.transaction.getTransaction,
    verifyAuth,
    Transaction.getTransaction
);
router.post(
    routes.transaction.addTransaction,
    verifyAuth,
    Transaction.addTransaction
);

router.put(
    routes.transaction.updateTransaction,
    verifyAuth,
    Transaction.updateTransaction
);

module.exports = router;
