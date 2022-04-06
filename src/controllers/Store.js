const Store = require("../services/Store");

async function addStore(req, res, next) {
    try {
        const store = await Store.addStore(req.body);

        res.status(200).send(store);
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

module.exports = {
    addStore,
    getStores,
    getStore,
    updateStore,
    storeReport,
};
