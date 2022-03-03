const router = require("express").Router();
const routes = require("../../routes.json");
const verifyAuth = require("../../middleware/verifyAuth");

const Category = require("../controllers/Category");

router.get(
    routes.category.get.getCategories,
    verifyAuth,
    Category.getCategories
);

module.exports = router;
