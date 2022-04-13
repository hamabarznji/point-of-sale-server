const OrderedProduct = require("../services/OrderedProduct");
const Order = require("../services/Order");
const Payment = require("../services/Payment");
const Customer = require("../models/Customer");
const TransfareedProduct = require("../services/TransfareedProduct");
const Store = require("../models/Store");
async function getOrderedProduct(id) {
    try {
        return await OrderedProduct.getOrderedProduct(id);
    } catch (err) {
        return err.message;
    }
}

//getAll
async function getAll(req, res, next) {
    try {
        const orderedProducts = await OrderedProduct.getAll();
        res.status(200).json(orderedProducts);
    } catch (err) {
        next(err);
    }
}
function totalPriceCalculator(price, weight, qty) {
    if (weight !== 0) {
        return weight * price;
    } else if (qty !== 0) {
        return qty * price;
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
        const customer = await Customer.findOne({
            where: { id: data[0].order_.customer_phone },
        });
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

module.exports = {
    getOrderedProduct,
    getOrderedProducts,
    addOrderedProduct,
    getAll,
    updateOrderedProduct,
    getOrderedproductsbyOrderId,
};
