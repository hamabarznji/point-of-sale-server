const router = require("express").Router();
const routes = require("../../routes.json");
const verifyAuth = require("../../middleware/verifyAuth");

const Order = require("../controllers/Order");

router.post(routes.order.addOrder, verifyAuth, Order.addOrder);
router.get(routes.order.getOrders, verifyAuth, Order.getOrders);
//router.get(routes.order.getOrder, verifyAuth, Order.getOrder);

router.get(
    routes.order.getOrdersByCustomerId,
    verifyAuth,
    Order.getOrdersByCustomerId
);

module.exports = router;
