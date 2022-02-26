const Product = require("../models/Product");

async function addProduct({
    id,
    name,
    supplier_id,
    category_id,
    price,
    qty,
    size,
    color,
    weight,
    date,
} = {}) {
    try {
        return await Product.create({
            id,
            name,
            supplier_id,
            category_id,
            price,
            qty,
            size,
            color,
            weight,
            date,
        });
    } catch (err) {
        return err.message;
    }
}
async function updateProduct({
    id,
    name,
    supplier_id,
    category_id,
    price,
    qty,
    size,
    color,
    weight,
    date,
} = {}) {
    try {
        return await Product.update(
            {
                name,
                supplier_id,
                category_id,
                price,
                qty,
                size,
                color,
                weight,
                date,
            },
            { where: { id: id } }
        );
    } catch (err) {
        return err.message;
    }
}

async function getProducts() {
    try {
        return await Product.findAll();
    } catch (err) {
        return err.message;
    }
}

module.exports = { addProduct, getProducts, updateProduct };
