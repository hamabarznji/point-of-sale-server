const Product = require("../services/Product");

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
        const product = await Product.updateProduct(req.body);

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
