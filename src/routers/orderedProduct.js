const router = require("express").Router();
const routes = require("../../routes.json");
const verifyAuth = require("../../middleware/verifyAuth");

const OrderedProduct = require("../controllers/OrderedProduct");

router.post(
    routes.orderedProduct.addOrderedProduct,
    verifyAuth,
    OrderedProduct.addOrderedProduct
);
router.get(
    routes.orderedProduct.get.getOrderedProducts,
    verifyAuth,
    OrderedProduct.getOrderedProducts
);
router.get(
    routes.orderedProduct.get.getOrderedProduct,
    verifyAuth,
    OrderedProduct.getOrderedProduct
);

module.exports = router;
