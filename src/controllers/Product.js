const Product = require("../services/Product");
const { totalPriceCalculator } = require("../helper/reuseableFuncctions");

async function addProduct(req, res, next) {
    try {
        const product = await Product.addProduct(req.body);
        console.log(product);
        res.status(200).send(product);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

async function updateProduct(req, res, next) {
    try {
        if (req.body.weight && req.body.qty > 0) {
            return res
                .status(422)
                .send("A product cannot have both weight and quantity!");
        }
        const foundedProduct = await Product.getProduct(req.body.id);
        const { price, weight, qty, id } = foundedProduct;
        if (!req.body.isNew) {
            const updatedProduct = await Product.updateProduct(req.body);
            return res.status(200).send(updatedProduct);
        }

        if (weight <= 0 && qty > 0) {
            const averagePrice =
                (price * qty + req.body.price * req.body.qty) /
                (qty + req.body.qty);
            const newQty = qty + req.body.qty;
            const updatedProduct = await Product.updateProduct({
                id,
                name: req.body.name,
                supplier_id: req.body.supplier_id,
                category_id: req.body.category_id,
                price: averagePrice.toFixed(2),
                qty: newQty,
                color: req.body.color,
                weight: req.body.weight,
                date: req.body.date,
            });
            return res.status(200).send(updatedProduct);
        } else {
            const averagePrice =
                (price * weight + req.body.price * req.body.weight) /
                (weight + req.body.weight);
            const newWeight = weight + req.body.weight;
            const updatedProduct = await Product.updateProduct({
                id,
                name: req.body.name,
                supplier_id: req.body.supplier_id,
                category_id: req.body.category_id,
                price: averagePrice.toFixed(2),
                qty: req.body.qty,
                color: req.body.color,
                weight: newWeight,
                date: req.body.date,
            });
            return res.status(200).send(updatedProduct);
        }
    } catch (erorr) {
        return res.status(404).send(erorr);
    }
}

async function getProducts(req, res, next) {
    try {
        const data = await Product.getProducts();
        const products = data.map((product) => {
            return {
                id: product.id,
                name: product.name,
                supplierName: product.supplier.name,
                categoryName: product.category.name,
                supplier_id: product.supplier_id,
                category_id: product.category_id,
                price: product.price,
                qty: product.qty,
                color: product.color,
                weight: product.weight,
                date: product.date,
            };
        });

        res.status(200).send(products);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}
async function getProduct(req, res, next) {
    try {
        const product = await Product.getProduct(req.params.id);

        res.status(200).send(product);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

async function productReport(req, res, next) {
    try {
        const products = await Product.productsReport(
            req.params.from,
            req.params.to
        );

        productInfo = {
            productInfo: products.map((product) => {
                return {
                    name: product.name,
                    supplierName: product.supplier.name,
                    price: product.price,
                    qty: product.qty,
                    color: product.color,
                    weight: product.weight,
                    total: totalPriceCalculator(
                        product.price,
                        product.weight,
                        product.qty
                    ),
                    numberOfTransfareedProducts:
                        product.Transfareed_Products.length,
                };
            }),
        };

        const report = {
            ...productInfo,
            totalAmount: productInfo.productInfo.reduce(
                (total, product) => total + product.total,
                0
            ),
            totalNumberOfTransfareedProducts: productInfo.productInfo.reduce(
                (total, product) => total + product.numberOfTransfareedProducts,
                0
            ),
        };

        res.status(200).send(report);
    } catch (err) {
        res.status(404).send(err);
    }
}
async function getProductsNotifications(req, res, next) {
    try {
        const data = await Product.getProductsNotifications().then(
            (products) => {
                return products.map((product) => {
                    return {
                        id: product.id,
                        name: product.name,
                        qty: product.qty,
                        color: product.color,
                        weight: product.weight,
                    };
                });
            }
        );
        res.status(200).send({ data, badgeContent: data.length });
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}
module.exports = {
    addProduct,
    getProducts,
    updateProduct,
    getProduct,
    productReport,
    getProductsNotifications,
};
