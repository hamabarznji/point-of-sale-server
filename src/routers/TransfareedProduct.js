const router = require("express").Router();
const routes = require("../../routes.json");
const verifyAuth = require("../../middleware/verifyAuth");

const TransfareedProduct = require("../controllers/TransfareedProduct");

router.post(
    routes.TransfareedProduct.addTransfareedproduct,
    verifyAuth,
    TransfareedProduct.addTransfareedProduct
);

router.get(
    routes.TransfareedProduct.getTransfareedProductsNotifications,
    verifyAuth,
    TransfareedProduct.getTransfareedProductsNotifications
);
router.get(
    routes.TransfareedProduct.getTransfareedProducts,
    verifyAuth,
    TransfareedProduct.getAllTransfareedProductsWithAssociatedTables
);
router.get(
    routes.TransfareedProduct.getTransfareedProductsBystoreId,
    verifyAuth,
    TransfareedProduct.getAllTransfareedProductsWithAssociatedTables
);
router.get(
    routes.TransfareedProduct.reportTransfareedProduct,
    TransfareedProduct.transfarredProductsReport
);
router.get(
    routes.TransfareedProduct.getTransfareedProduct,
    verifyAuth,
    TransfareedProduct.getTransfareedProduct
);
router.put(
    routes.TransfareedProduct.updateTransfareedProduct,
    verifyAuth,
    TransfareedProduct.updateTransfareedProduct
);
module.exports = router;
