const router = require("express").Router();
const routes = require("../../routes.json");
const verifyAuth = require("../../middleware/verifyAuth");

const Product = require("../controllers/Product");

router.post(routes.product.addProduct, verifyAuth, Product.addProduct);
router.get(routes.product.get.getProducts, verifyAuth, Product.getProducts);
router.get(routes.product.get.getProduct, verifyAuth, Product.getProduct);
//router.get(routes.product.productsreport, verifyAuth, Product.productReport);
router.get(
    routes.product.getProductsNotifications,
    verifyAuth,
    Product.getProductsNotifications
);
router.put(routes.product.updateProduct, Product.updateProduct);

module.exports = router;
