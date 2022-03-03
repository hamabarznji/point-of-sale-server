const Expense = require("../services/Expense");

async function addExpense(req, res, next) {
    try {
        const data = await Expense.addExpense(req.body);
        res.status(200).send(data);
    } catch (erorr) {
        res.status(erorr);
    }
}

async function getExpenses(req, res, next) {
    try {
        const data = await Expense.getExpenses();
        res.status(200).send(data);
    } catch (erorr) {
        res.status(erorr);
    }
}

async function getExpense(req, res, next) {
    try {
        const expense = await Expense.getExpense(req.params.id);
        res.status(200).send(expense);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

async function updateExpense(req, res, next) {
    try {
        const data = await Expense.updateExpense(req.body);
        console.log(data);
        res.status(200).send(data);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

module.exports = { addExpense, getExpenses, getExpense, updateExpense };
