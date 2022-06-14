const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization)
        return res
            .status(401)
            .send(
                "<h1 style='text-align:center'>Access Denied! You are not allowed to access this api(Unauthorized).</h1>"
            );
    const token = authorization.split(" ")[1];
    try {
        jwt.verify(token, "fyp");
        next();
    } catch (error) {
        res.status(401).send(
            "<h1 style='text-align:center'>Access Denied! You are not allowed to access this api(Unauthorized).</h1>"
        );
    }
};

module.exports = verifyToken;
