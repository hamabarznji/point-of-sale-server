const Store = require("../services/Store");
const TransfareedProduct = require("../services/TransfareedProduct");
const { totalPriceCalculator } = require("../helper/reuseableFuncctions");

async function addStore(req, res, next) {
    try {
        const store = await Store.addStore(req.body);

        res.status(200).send(store);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

async function getStores(req, res, next) {
    try {
        const stores = await Store.getStores();

        res.status(200).send(stores);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}
async function getStore(req, res, next) {
    try {
        const store = await Store.getStore(req.params.id);

        res.status(200).send(store);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}
async function updateStore(req, res, next) {
    try {
        const store = await Store.updateStore(req.body);

        res.status(200).send(store);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

async function storeReport(req, res, next) {
    try {
        const store = await Store.storeReport(
            req.params.from,
            req.params.to,
            req.params.id
        );

        const report = store.map((product) => {
            return {
                name: product.product.name,
                price: product.product.price,
                qty: product.product.qty,
                color: product.product.color,
                weight: product.product.weight,
                totalAmount: totalPriceCalculator(
                    product.product.price,
                    product.product.weight,
                    product.product.qty
                ),
            };
        });

        res.status(200).send(report);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}
async function storeReportById(req, res, next) {
    try {
        const store = await TransfareedProduct.getAllTransfareedProducts(
            req.params.id
        );
        const AllTransfareedProducts = store.map((transfareedProduct) => {
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
        });
        res.status(200).send(AllTransfareedProducts);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

module.exports = {
    addStore,
    getStores,
    getStore,
    updateStore,
    storeReport,
    storeReportById,
};
