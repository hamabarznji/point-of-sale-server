const router = require("express").Router();
const routes = require("../../routes.json");
const verifyAuth = require("../../middleware/verifyAuth");

const Order = require("../controllers/Order");

router.post(routes.order.addOrder, verifyAuth, Order.addOrder);
router.get(routes.order.get.getOrders, verifyAuth, Order.getOrders);
router.get(routes.order.get.getOrder, verifyAuth, Order.getOrder);

module.exports = router;
