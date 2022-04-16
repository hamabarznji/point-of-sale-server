const TransfareedProduct = require("../services/TransfareedProduct");
const Product = require("../services/Product");
async function addTransfareedProduct(req, res, next) {
    try {
        const { product_id, weight, qty } = req.body;
        if (req.body.weight > 0 && req.body.qty > 0) {
            return res
                .status(422)
                .send(
                    "A transfareed product cannot have both weight and quantity!"
                );
        }

        const product = await Product.getProduct(product_id);
        const { weight: oldWeight, qty: oldQty } = product;
        /*     if (oldWeight <= 0 || oldQty <= 0) {
            return res
                .status(422)
                .send("There is no engough product to transfare!");
        } */

        const transfareedProduct =
            await TransfareedProduct.addTransfareedProductn(req.body);

        await Product.updateProduct({
            id: product_id,
            weight: oldWeight - weight,
            qty: oldQty - qty,
            isNew: false,
        });
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
async function transfarredProductsReport(req, res, next) {
    try {
        const transfareedProducts =
            await TransfareedProduct.transfarredProductsReport(
                req.params.from,
                req.params.to,
                req.params.storeid
            );

        const report = {
            productInfo: transfareedProducts.map((transfareedProduct) => {
                return {
                    qty: transfareedProduct.qty,
                    weight: transfareedProduct.weight,
                    color: transfareedProduct.product.color,
                    productName: transfareedProduct.product.name,
                };
            }),
            numberOfTransfareedProducts: transfareedProducts.length,
            totalWeight: transfareedProducts.reduce((acc, curr) => {
                return acc + curr.weight;
            }, 0),
            totalQty: transfareedProducts.reduce((acc, curr) => {
                return acc + curr.qty;
            }, 0),
        };

        res.status(200).send(report);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}
async function getTransfareedProductsNotifications(req, res, next) {
    try {
        const data =
            await TransfareedProduct.getTransfareedProductsNotifications(
                req.params.id
            );
        const products = data.map((product) => {
            return {
                qty: product.qty,
                weight: product.weight,
                name: product.product.name,
                color: product.product.color,
                place: "store",
            };
        });

        res.status(200).send({ data: products, badgeContent: data.length });
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
    transfarredProductsReport,
    getTransfareedProductsNotifications,
};
