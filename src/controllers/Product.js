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
        const products = await Product.getProduct(req.params.id);

        res.status(200).send(products);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

module.exports = { addProduct, getProducts, updateProduct, getProduct };
