const OrderedProduct = require("../services/OrderedProduct");
const Order = require("../services/Order");
const Payment = require("../services/Payment");
const Customer = require("../services/Customer");
const TransfareedProduct = require("../services/TransfareedProduct");
const Store = require("../models/Store");
const Product = require("../models/Product");
const { totalPriceCalculator } = require("../helper/reuseableFuncctions");

async function getOrderedProduct(id) {
    try {
        return await OrderedProduct.getOrderedProduct(id);
    } catch (err) {
        return err.message;
    }
}

async function getAll(req, res, next) {
    try {
        const orderedProducts = await OrderedProduct.getAll();
        res.status(200).json(orderedProducts);
    } catch (err) {
        next(err);
    }
}

async function getOrderedproductsbyOrderId(req, res, next) {
    try {
        const transfareedProducts =
            await TransfareedProduct.getTransfareedProducts([1, 2]);
        const data = await OrderedProduct.getOrderedproductsbyOrderId(
            req.params.orderid
        );
        const payments = await Payment.findAll({
            where: { order_id: req.params.orderid },
        });
        const customer = await Customer.getCustomer(
            data[0].order_.customer_phone
        );
        const store = await Store.findOne({
            where: { id: data[0].order_.store_id },
        });

        /*  const foundedP = tfp.find((p) => p.product.id == 11).product.name;
        console.log(foundedP, "tfp"); */

        const orderedProducts = data.map((op) => {
            return {
                orderId: op.order_id,
                productId: op.Transfareed_Product.product_id,
                productName: transfareedProducts.find(
                    (tp) => tp.product.id == op.Transfareed_Product.product_id
                ).product.name,

                transfareedProduct_id: op.transfareedProduct_id,
                storeId: op.store_id,
                qty: op.qty,
                weight: op.weight,
                price: op.price,
                date: op.order_.date,
                totalAmount: totalPriceCalculator(op.price, op.weight, op.qty),
                totalPayments: payments.reduce((acc, payment) => {
                    return acc + payment.amount;
                }, 0),
            };
        });
        const totalAmount = orderedProducts.reduce(
            (acc, curr) => acc + curr.totalAmount,
            0
        );
        const totalPayments = payments.reduce((acc, payment) => {
            return acc + payment.amount;
        }, 0);

        const paidAmount = totalAmount - totalPayments;
        res.status(200).json({
            orderedProducts,
            paidAmount,
            customer,
            totalAmount,
        });
    } catch (err) {
        next(err);
    }
}

async function getOrderedProducts(req, res, next) {
    try {
        return await OrderedProduct.getOrderedProducts();
    } catch (err) {
        return err.message;
    }
}

async function addOrderedProduct(req, res, next) {
    try {
        const { ops, orderDetails, paymentInfo } = req.body;
        const { id } = orderDetails;

        const orderedProductsInfo = ops.map((item) => {
            return {
                order_id: id,
                transfareedProduct_id: item.transfareedProduct_id,
                qty: item.qty,
                weight: item.weight,
                price: item.price,
            };
        });
        const orderedProducts = await OrderedProduct.addOrderedProduct(
            orderedProductsInfo
        );

        const x = await TransfareedProduct.updateOrderedTransfarredProducts(
            orderedProductsInfo
        );
        await Payment.addPayment(paymentInfo);
        await Order.res.status(200).json(orderedProducts);
    } catch (err) {
        return err.message;
    }
}

async function updateOrderedProduct(req, res, next) {
    try {
        return await OrderedProduct.updateOrderedProduct(req.body);
    } catch (err) {
        return err.message;
    }
}
async function getOrderedProductsbyId(req, res, next) {
    try {
        const data = await OrderedProduct.getOrderedProductsbyId(req.params.id);

        const arrayOfProductsId = data.map((productId) => {
            return productId.Transfareed_Product.product_id;
        });
        const payments = await Payment.getPaymentsbyId(req.params.id).then(
            (payments) => {
                return payments.map((p) => {
                    return {
                        id: p.id,
                        amount: p.amount,
                        date: p.paid_date,
                    };
                });
            }
        );

        const foundedProducts = await Product.findAll({
            where: { id: arrayOfProductsId },
        }).then((products) => {
            return products.map((product) => {
                return {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    color: product.color,
                };
            });
        });

        const orderedProducts = data.map((product) => {
            return {
                orderId: product.order_id,
                productName: foundedProducts.find(
                    (p) => p.id == product.Transfareed_Product.product_id
                ).name,
                color: foundedProducts.find(
                    (p) => p.id == product.Transfareed_Product.product_id
                ).color,
                qty: product.qty,
                weight: product.weight,
                price: product.price,
                totalAmount: totalPriceCalculator(
                    product.price,
                    product.weight,
                    product.qty
                ),
            };
        });
        const dueAmount =
            orderedProducts.reduce((acc, curr) => acc + curr.totalAmount, 0) -
            payments.reduce((acc, curr) => {
                return acc + curr.amount;
            }, 0);
        const customer = await Customer.getCustomer(
            data[0].order_.customer_phone
        );
        res.status(200).send({
            orderId: data[0].order_id,
            customerPhone: customer.id,
            customerName: customer.name,
            date: data[0].order_.date,
            userId: data[0].order_.user_id,
            storeId: data[0].order_.store_id,
            totalAmount: orderedProducts.reduce(
                (acc, curr) => acc + curr.totalAmount,
                0
            ),
            totalPayments: payments.reduce((acc, curr) => {
                return acc + curr.amount;
            }, 0),
            dueAmount,
            orderedProducts,
            payments,
        });
    } catch (err) {
        return err.message;
    }
}

module.exports = {
    getOrderedProduct,
    getOrderedProducts,
    addOrderedProduct,
    getAll,
    updateOrderedProduct,
    getOrderedproductsbyOrderId,
    getOrderedProductsbyId,
};
