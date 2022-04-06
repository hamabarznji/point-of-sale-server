const Expense = require("../models/Expense");
const Sequelize = require("sequelize");
async function getExpenses(storeid) {
    try {
        return await Expense.findAll({
            include: { all: true },
            where: {
                store_id: storeid,
            },
        });
    } catch (err) {
        return err.message;
    }
}

async function getExpense(id) {
    try {
        return await Expense.findOne({ where: { id: id } });
    } catch (err) {
        return err.message;
    }
}

async function addExpense(expense) {
    try {
        return await Expense.create(expense);
    } catch (err) {
        return err.message;
    }
}

async function updateExpense(expense) {
    try {
        return await Expense.update(expense, { where: { id: expense.id } });
    } catch (err) {
        return err.message;
    }
}

async function expenseReport(fromDate, toDate, storeid) {
    try {
        return await Expense.findAll({
            include: { all: true },
            where: {
                store_id: storeid,
                date: {
                    [Sequelize.Op.between]: [fromDate, toDate],
                },
            },
        });
    } catch (err) {
        return err.message;
    }
}

module.exports = {
    getExpenses,
    getExpense,
    addExpense,
    updateExpense,
    expenseReport,
};
