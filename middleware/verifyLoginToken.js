const jwt = require("jsonwebtoken");

const verifyLoginToken = (req, res, next) => {
    const bearerHeader = req.headers["authorization"];

    if (!bearerHeader) {
        return res.sendStatus(403);
    }
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
};

module.exports = verifyLoginToken;
