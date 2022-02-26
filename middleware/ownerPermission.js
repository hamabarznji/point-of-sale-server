const jwt = require("jsonwebtoken");
/* 
const ownerPermission = (res, tokenn) => {
    let token = jwt.decode(tokenn);
    if (token.role !== "owner")
        return res.status(403).send({
            error: "You are not authorized to access this resource",
        });
}; */
/* module.exports = ownerPermission;

const ownerPermission = (req, res, next) => {
    const bearerHeader = req.headers["authorization"];

    if (!bearerHeader) {
        return res.sendStatus(403);
    }
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    console.log(bearerToken);
    next();
}; */
