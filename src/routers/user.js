const router = require("express").Router();
const routes = require("../../routes.json");
const verifyAuth = require("../../middleware/verifyAuth");

const User = require("../controllers/User");

router.post(routes.user.login.loginUser, User.login);
router.post(routes.user.addUser, verifyAuth, User.addUser);
router.get(routes.user.get.getUsers, verifyAuth, User.getUsers);
router.get(routes.user.get.getUser, verifyAuth, User.getUser);
router.get(routes.user.delete.deleteUser, verifyAuth, User.deleteUser);
router.put(routes.user.updateUser, verifyAuth, User.updateUser);

module.exports = router;
