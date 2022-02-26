const jwt = require("jsonwebtoken");

const loginAuth = (id, role) => {
    return jwt.sign({ id: id, role: role }, process.env.SECRETKEY);
};
module.exports = loginAuth;
