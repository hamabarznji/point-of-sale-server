const Customer = require("../services/Customer");

async function addCustomer(req, res, next) {
    try {
        const customer = await Customer.addCustomer({
            id: req.body.id,
            name: req.body.name,
            address: req.body.address,
            store_id: req.body.store_id,
        });

        res.status(200).send(customer);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

async function getCustomers(req, res, next) {
    try {
        const customers = await Customer.getCustomers(req.params.storeid);

        res.status(200).send(customers);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

async function getCustomersForSpecificStore(req, res, next) {
    try {
        const customers = await Customer.getCustomersForSpecificStore(
            req.params.storeid
        );

        res.status(200).send(customers);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}
async function getCustomer(req, res, next) {
    try {
        const customers = await Customer.getCustomer(req.params.id);

        res.status(200).send(customers);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}
async function updateCustomer(req, res, next) {
    try {
        const customer = await Customer.updateCustomer(req.body);
        console.log(customer);
        res.status(200).send(customer);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}
async function customerReport(req, res, next) {
    try {
        const data = await Customer.customerReport(req.params.id);
        const numberOfOrders = data.length;
        const customerInfo = {
            name: data[0].customer.name,
            address: data[0].customer.address,
            phone: data[0].customer.id,
        };

        /*        const orderededProducts = data.map((product) => {
            return {
                orderededProducts: product.ordereded_products.map((op) => {
                    return {
                        qty: op.qty,
                        price: op.price,
                        weight: op.weight,
                        totalPrice: totalPriceCalculator(
                            op.price,
                            op.weight,
                            op.qty
                        ),
                    };
                }),
                payments: product.payments,
            };
        }); */
        const calculatedDebt = data.map((order) => {
            return {
                total: order.ordereded_products.reduce((acc, product) => {
                    return (
                        acc +
                        totalPriceCalculator(
                            product.price,
                            product.weight,
                            product.qty
                        )
                    );
                }, 0),
                paidAmount: order.payments.reduce((acc, payment) => {
                    return acc + payment.amount;
                }, 0),
                debt:
                    order.ordereded_products.reduce((acc, product) => {
                        return (
                            acc +
                            totalPriceCalculator(
                                product.price,
                                product.weight,
                                product.qty
                            )
                        );
                    }, 0) -
                    order.payments.reduce((acc, payment) => {
                        return acc + payment.amount;
                    }, 0),
            };
        });

        const totalDebtsAmount = calculatedDebt.reduce((acc, curr) => {
            return acc + curr.debt;
        }, 0);

        res.status(200).send({
            debtsInfo: calculatedDebt,
            totalDebtsAmount,
            numberOfOrders,
            customerInfo,
        });
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

function totalPriceCalculator(price, weight, qty) {
    if (weight !== 0) {
        return weight * price;
    } else if (qty !== 0) {
        return qty * price;
    }
}

async function debtReport(req, res, next) {
    try {
        const data = await Customer.debtReport(
            req.params.from,
            req.params.to,
            req.params.storeid
        );

        const ids = data.map((item) => {
            return item.customer.id;
        });
        const filteredids = ids.filter(
            (item, index) => ids.indexOf(item) === index
        );
        const information = data.map((info) => {
            return {
                customer: {
                    id: info.customer.id,
                    name: info.customer.name,
                    address: info.customer.address,
                },
                ordeerInfo: info.ordereded_products.map((op) => {
                    return {
                        order_id: op.order_id,
                        totalAmount: totalPriceCalculator(
                            op.price,
                            op.weight,
                            op.qty
                        ),
                    };
                }),
                totalOrderPrice: info.ordereded_products.reduce((acc, curr) => {
                    return (
                        acc +
                        totalPriceCalculator(curr.price, curr.weight, curr.qty)
                    );
                }, 0),

                totalPayment: info.payments.reduce((acc, curr) => {
                    return acc + curr.amount;
                }, 0),
            };
        });

        const calculatedInformation = information.map((info) => {
            return {
                ...information,
                totalPayment: info.totalPayment,
                totalOrderPrice: info.totalOrderPrice,
                debt: info.totalOrderPrice - info.totalPayment,
            };
        });

        res.status(200).send(data);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

module.exports = {
    addCustomer,
    getCustomers,
    getCustomer,
    updateCustomer,
    getCustomersForSpecificStore,
    debtReport,
    customerReport,
};
