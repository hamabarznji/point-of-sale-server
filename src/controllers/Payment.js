const Payment = require("../services/Payment");

async function addPayment(req, res, next) {
    try {
        const payment = await Payment.addPayment(req.body);

        res.status(200).send(payment);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

async function getPayment(req, res, next) {
    try {
        const payment = await Payment.getPayment(req.params.id);

        res.status(200).send(payment);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

async function getPayments(req, res) {
    try {
        const payments = await Payment.getPayments();

        res.status(200).send(payments);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

async function updatePayment(req, res, next) {
    try {
        const payment = await Payment.updatePayment(req.body);

        res.status(200).send(payment);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

module.exports = {
    addPayment,
    getPayment,
    getPayments,
    updatePayment,
};
