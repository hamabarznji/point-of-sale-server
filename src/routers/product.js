const router = require("express").Router();
const routes = require("../../routes.json");
const verifyAuth = require("../../middleware/verifyAuth");

const Product = require("../controllers/Product");

router.post(routes.product.addProduct, Product.addProduct);
router.get(routes.product.get.getProducts, verifyAuth, Product.getProducts);
router.put(routes.product.updateProduct, Product.updateProduct);

module.exports = router;
