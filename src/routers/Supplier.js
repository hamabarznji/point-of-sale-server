const router = require("express").Router();
const routes = require("../../routes.json");
const verifyAuth = require("../../middleware/verifyAuth");

const Supplier = require("../controllers/Supplier");

router.get(routes.supplier.get.getSuppliers, verifyAuth, Supplier.getSuppliers);
router.post(routes.supplier.addSupplier, verifyAuth, Supplier.addSupplier);

module.exports = router;
