const Category = require("../services/Category");

async function getCategories(req, res, next) {
    try {
        const categories = await Category.getCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { getCategories };
