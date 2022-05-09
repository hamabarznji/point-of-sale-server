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
    routes.orderedProduct.getOrderedProducts,
    verifyAuth,
    OrderedProduct.getAll
);
router.get(
    routes.orderedProduct.getOrderedproductsbyOrderId,
    verifyAuth,
    OrderedProduct.getOrderedProductsbyId
);

router.get(
    routes.orderedProduct.getOrderedProduct,
    verifyAuth,
    OrderedProduct.getOrderedProduct
);
router.put(
    routes.orderedProduct.updateOrderedProduct,
    verifyAuth,
    OrderedProduct.updateOrderedProduct
);

module.exports = router;
