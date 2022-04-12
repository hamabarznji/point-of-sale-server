const Dashboard = require("../services/Dashboard");

function totalPriceCalculator(price, weight, qty) {
    if (weight !== 0) {
        return weight * price;
    } else if (qty !== 0) {
        return qty * price;
    }
}
async function dashboardReport(req, res, next) {
    try {
        const data = await Dashboard.dashboardReport(req.params.storeid);
        const { customers, products, orders, transfareedProducts } = data;
        const customerNumber = customers.length;
        const productNumber = products.length;
        const orderNumber = orders.length;
        const transfareedProductNumber = transfareedProducts.length;

        const debts = orders.map((order) => {
            return {
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

        const sales = orders.reduce((acc, product) => {
            return (
                acc +
                product.ordereded_products.reduce((acc, product) => {
                    return (
                        acc +
                        totalPriceCalculator(
                            product.price,
                            product.weight,
                            product.qty
                        )
                    );
                }, 0)
            );
        }, 0);
        const totalDebtsAmount = debts.reduce((acc, debt) => {
            return acc + debt.debt;
        }, 0);

        res.status(200).send({
            numberofCustomers: customerNumber,
            numberofProducts: productNumber,
            numberofOrders: orderNumber,
            numberofTransfareedProducts: transfareedProductNumber,
            totalDebtsAmount: totalDebtsAmount,
            sales: sales,
        });
    } catch (err) {
        res.sendStatus(err);
    }
}

module.exports = { dashboardReport };
