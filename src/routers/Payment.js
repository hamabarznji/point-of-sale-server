const router = require("express").Router();
const routes = require("../../routes.json");
const verifyAuth = require("../../middleware/verifyAuth");

const Payment = require("../controllers/Payment");

router.get(routes.Payment.getPayments, verifyAuth, Payment.getPayments);
router.get(routes.Payment.getPayment, verifyAuth, Payment.getPayment);
router.post(routes.Payment.addPayment, verifyAuth, Payment.addPayment);
router.put(routes.Payment.updatePayment, verifyAuth, Payment.updatePayment);

module.exports = router;
