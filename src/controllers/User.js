const User = require("../services/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const loginAuth = require("../../middleware/loginAuth");

async function login(req, res) {
    try {
        const user = await User.login(req.body.username);
        if (!user) return res.status(404).send({ error: "User not found" });

        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            throw new Error("Something went wrong! Please try again!");
        }
        const token = loginAuth(user.id, user.role);
        res.status(200).send({
            id: user.id,
            username: user.username,
            role: user.role,
            store_id: user.store_id,
            token,
        });
    } catch (erorr) {
        res.status(404).send(erorr, "The User name or password is incorrect!");
    }
}

/* async function getUsers(req, res, next) {
    try {
        let token = jwt.decode(req.token);
        if (token.role !== "owner")
            return res.status(403).send({
                error: "You are not authorized to access this resource",
            });
        jwt.verify(req.token, process.env.SECRETKEY, async (err) => {
            if (err)
                return res.status(403).send({ error: "Please authenticate." })

            const data = await User.getUsers();
            res.status(200).send({ data });
        });
    } catch (erorr) {
        res.status(erorr);
    }
} */ async function getUsers(req, res, next) {
    try {
        const data = await User.getUsers();
        res.status(200).send(data);
    } catch (erorr) {
        res.status(erorr);
    }
}

async function getUser(req, res, next) {
    try {
        let token = jwt.decode(req.token);
        if (token.role !== "owner")
            return res.status(403).send({
                error: "You are not authorized to access this resource",
            });
        jwt.verify(req.token, process.env.SECRETKEY, async (err) => {
            if (err)
                return res.status(403).send({ error: "Please authenticate." });

            const data = await User.getUser(req.params.id);
            res.status(200).send(data);
        });
    } catch (erorr) {
        res.status(erorr);
    }
}

/* async function getUser(req, res, next) {
    try {
        const data = await User.getUser(req.params.id);

        res.status(200).send(data);
    } catch (erorr) {
        res.status(erorr);
    }
} */

async function addUser(req, res, next) {
    console.log(req.body);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    try {
        const user = await User.addUser({
            username: req.body.username,
            password: hashedPassword,
            role: req.body.role,
            store_id: req.body.store_id,
        });
        res.status(200).send(user);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

async function deleteUser(req, res, next) {
    try {
        const data = await User.deleteUser(req.params.id);
        res.status(200).send(data);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}
async function updateUser(req, res, next) {
    try {
        const data = await User.updateUser(user);
        res.status(200).send(data);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

module.exports = { getUsers, getUser, addUser, deleteUser, login, updateUser };
