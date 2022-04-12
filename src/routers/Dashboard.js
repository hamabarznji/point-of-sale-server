const router = require("express").Router();
const routes = require("../../routes.json");
const verifyAuth = require("../../middleware/verifyAuth");

const Dashboard = require("../controllers/Dashboard");

router.get(
    routes.dashboard.getDashboard,
    verifyAuth,
    Dashboard.dashboardReport
);

module.exports = router;
