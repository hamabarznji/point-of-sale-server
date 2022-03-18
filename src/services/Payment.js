const Payment = require("../models/Payment");

async function addPayment(payment) {
    try {
        return await Payment.create(payment);
    } catch (err) {
        return err.message;
    }
}

async function getPayment(id) {
    try {
        return await Payment.findOne({ where: { id: id } });
    } catch (err) {
        return err.message;
    }
}

async function getPayments() {
    try {
        return await Payment.findAll();
    } catch (err) {
        return err.message;
    }
}

async function updatePayment(payment) {
    try {
        return await Payment.update(payment, {
            where: { id: payment.id },
        });
    } catch (err) {
        return err.message;
    }
}

module.exports = {
    addPayment,
    getPayment,
    getPayments,
    updatePayment,
};
