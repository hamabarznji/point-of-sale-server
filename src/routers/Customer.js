const router = require("express").Router();
const routes = require("../../routes.json");
const verifyAuth = require("../../middleware/verifyAuth");

const Customer = require("../controllers/Customer");

router.get(routes.customer.get.getCustomers, Customer.getCustomers);

router.get(
    routes.customer.get.getCustomerReport,
    verifyAuth,
    Customer.customerReport
);

//router.get("/debts", verifyAuth, Customer.debtReport);
/* router.get(
    routes.customer.get.getCustomersForSpecificStore,
    verifyAuth,
    Customer.getCustomersForSpecificStore
); */

router.get(routes.customer.get.getCustomer, verifyAuth, Customer.getCustomer);
router.post(routes.customer.addCustomer, verifyAuth, Customer.addCustomer);
router.put(routes.customer.updateCustomer, verifyAuth, Customer.updateCustomer);

module.exports = router;
