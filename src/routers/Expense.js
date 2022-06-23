const router = require("express").Router();
const routes = require("../../routes.json");
const verifyAuth = require("../../middleware/verifyAuth");

const Expense = require("../controllers/Expense");

router.post(routes.expense.addExpense, verifyAuth, Expense.addExpense);
router.put(routes.expense.updateExpense, verifyAuth, Expense.updateExpense);
router.get(routes.expense.get.getExpenses, verifyAuth, Expense.getExpenses);
//router.get(routes.expense.get.getExpense, verifyAuth, Expense.getExpense);
//router.get(routes.expense.reportExpense, verifyAuth, Expense.expenseReport);

module.exports = router;
