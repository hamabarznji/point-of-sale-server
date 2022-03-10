const TransfareedProduct = require("../services/TransfareedProduct");

async function addTransfareedProduct(req, res, next) {
    try {
        const transfareedProduct =
            await TransfareedProduct.addTransfareedProductn(req.body);
        res.status(200).send(transfareedProduct);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}
async function updateTransfareedProduct(req, res, next) {
    try {
        const updatedTransfareedProduct =
            await TransfareedProduct.updateTransfareedProduct(req.body);

        res.status(200).send(updatedTransfareedProduct);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

async function getTransfareedProducts(req, res, next) {
    try {
        const transfareedProducts =
            await TransfareedProduct.getTransfareedProducts();

        res.status(200).send(transfareedProducts);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}
async function getTransfareedProduct(req, res, next) {
    try {
        const transfareedProduct =
            await TransfareedProduct.getTransfareedProduct(req.params.id);

        res.status(200).send(transfareedProduct);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}
async function getAllTransfareedProductsWithAssociatedTables(req, res, next) {
    try {
        const transfareedProducts =
            await TransfareedProduct.getAllTransfareedProductsWithAssociatedTables();
        const AllTransfareedProducts = transfareedProducts.map(
            (transfareedProduct) => {
                return {
                    id: transfareedProduct.id,
                    store_id: transfareedProduct.store_id,
                    product_id: transfareedProduct.product_id,
                    qty: transfareedProduct.qty,
                    weight: transfareedProduct.weight,
                    color: transfareedProduct.product.color,
                    date: transfareedProduct.date,
                    storeName: transfareedProduct.store.name,
                    productName: transfareedProduct.product.name,
                };
            }
        );
        res.status(200).send(AllTransfareedProducts);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

module.exports = {
    addTransfareedProduct,
    updateTransfareedProduct,
    getTransfareedProducts,
    getTransfareedProduct,
    getAllTransfareedProductsWithAssociatedTables,
};
