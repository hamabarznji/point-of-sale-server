const TransfareedProduct = require("../models/TransfareedProduct");
const Sequelize = require("sequelize");
const { Op } = require("sequelize");

async function addTransfareedProductn(transfareedproduct) {
    try {
        return await TransfareedProduct.create(transfareedproduct);
    } catch (err) {
        return err.message;
    }
}
async function updateTransfareedProduct(transfareedproduct) {
    try {
        return await TransfareedProduct.update(transfareedproduct, {
            where: { id: transfareedproduct.id },
        });
    } catch (err) {
        return err.message;
    }
}
async function deleteTransfareedProduct(transfareedproduct) {
    try {
        return await TransfareedProduct.destroy(transfareedproduct, {
            where: { id: transfareedproduct.id },
        });
    } catch (err) {
        return err.message;
    }
}

async function getTransfareedProducts() {
    try {
        return await TransfareedProduct.findAll();
    } catch (err) {
        return err.message;
    }
}
async function getTransfareedProduct(id) {
    try {
        return await TransfareedProduct.findOne({ id: id });
    } catch (err) {
        return err.message;
    }
}

async function getAllTransfareedProductsWithAssociatedTables(store_id) {
    try {
        //get the store name from Store and Product name from Prodcut
        return await TransfareedProduct.findAll({
            include: { all: true },
            where: {
                store_id: store_id,
                [Op.or]: {
                    qty: {
                        [Sequelize.Op.gt]: 0,
                    },
                    weight: {
                        [Sequelize.Op.gt]: 0,
                    },
                },
            },
        });
    } catch (err) {
        return err.message;
    }
}

async function updateOrderedTransfarredProducts(orderedProductsInfo) {
    try {
        const arrayofIds = orderedProductsInfo.map(
            (id) => id.transfareedProduct_id
        );
        const transfareedproducts = await TransfareedProduct.findAll({
            include: { all: true },
            where: {
                id: {
                    [Sequelize.Op.in]: arrayofIds,
                },
            },
        });

        const updatedTransfareedProducts = transfareedproducts.map(
            (transfareedproduct) => {
                return {
                    id: transfareedproduct.id,
                    qty:
                        transfareedproduct.qty -
                        orderedProductsInfo.find(
                            (op) =>
                                op.transfareedProduct_id ==
                                transfareedproduct.id
                        ).qty,
                    weight:
                        transfareedproduct.weight -
                        orderedProductsInfo.find(
                            (op) =>
                                op.transfareedProduct_id ==
                                transfareedproduct.id
                        ).weight,
                };
            }
        );

        Promise.all(
            updatedTransfareedProducts.map((transfareedproduct) => {
                return TransfareedProduct.update(transfareedproduct, {
                    where: { id: transfareedproduct.id },
                });
            })
        );
    } catch (err) {
        return err.message;
    }
}

module.exports = {
    addTransfareedProductn,
    updateTransfareedProduct,
    deleteTransfareedProduct,
    getTransfareedProducts,
    getTransfareedProduct,
    getAllTransfareedProductsWithAssociatedTables,
    updateOrderedTransfarredProducts,
};
