const Product = require("../services/Product");

async function addProduct(req, res, next) {
    try {
        const product = await Product.addProduct({
            id: req.body.id,
            name: req.body.name,
            supplier_id: req.body.supplier_id,
            category_id: req.body.category_id,
            price: req.body.price,
            qty: req.body.qty,
            size: req.body.size,
            color: req.body.color,
            weight: req.body.weight,
            date: req.body.date,
        });

        res.status(200).send(product);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}
async function updateProduct(req, res, next) {
    try {
        const product = await Product.updateProduct({
            id: req.body.id,
            name: req.body.name,
            supplier_id: req.body.supplier_id,
            category_id: req.body.category_id,
            price: req.body.price,
            qty: req.body.qty,
            size: req.body.size,
            color: req.body.color,
            weight: req.body.weight,
            date: req.body.date,
        });

        res.status(200).send(product);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

async function getProducts(req, res, next) {
    try {
        const products = await Product.getProducts();

        res.status(200).send(products);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

module.exports = { addProduct, getProducts, updateProduct };
