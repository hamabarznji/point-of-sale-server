const Category = require("../models/Category");

async function addCategory(category) {
    try {
        return await Category.create(category);
    } catch (error) {
        return error;
    }
}

async function getCategories() {
    try {
        return await Category.findAll();
    } catch (err) {
        return err.message;
    }
}

module.exports = { addCategory, getCategories };
