const router = require("express").Router();
const routes = require("../../routes.json");
const verifyAuth = require("../../middleware/verifyAuth");

const Store = require("../controllers/Store");

router.get(routes.store.getStores, verifyAuth, Store.getStores);
router.post(routes.store.addStore, verifyAuth, Store.addStore);

module.exports = router;
