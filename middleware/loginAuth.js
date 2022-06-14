const jwt = require("jsonwebtoken");

const loginAuth = (id, role, store_id) => {
    return jwt.sign({ id: id, role: role, store_id: store_id }, "fyp");
};
module.exports = loginAuth;
