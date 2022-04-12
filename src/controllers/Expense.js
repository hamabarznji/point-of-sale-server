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
        const data = await Expense.getExpenses(req.params.storeid);
        const expenses = data.map((expense) => {
            return {
                id: expense.id,
                store_id: expense.store_id,
                storeName: expense.store.name,
                description: expense.description,
                amount: expense.amount,
                date: expense.date,
            };
        });
        res.status(200).send(expenses);
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

async function expenseReport(req, res, next) {
    try {
        const expenses = await Expense.expenseReport(
            req.params.from,
            req.params.to,
            req.params.storeid
        );

        const expenseInfo = expenses.map((expense) => {
            return {
                description: expense.description,
                amount: expense.amount,
                date: expense.date,
            };
        });
        const report = {
            storeName: expenses[0].store.name,
            expenses: expenseInfo,
            totalExpensesAmount: expenses.reduce((acc, curr) => {
                return acc + curr.amount;
            }, 0),
            numberOfExpenses: expenseInfo.length,
        };

        res.status(200).send(report);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

module.exports = {
    addExpense,
    getExpenses,
    getExpense,
    updateExpense,
    expenseReport,
};
