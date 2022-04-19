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
            return res
                .status(404)
                .send({ error: "Something went wrong! Please try again!" });
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

async function getUsers(req, res, next) {
    try {
        const data = await User.getUsers();
        const users = data.map((user) => {
            return {
                id: user.id,
                username: user.username,
                role: user.role,
                storeName: user?.store?.name ? user?.store?.name : "default",
            };
        });
        res.status(200).send(users);
    } catch (erorr) {
        res.status(erorr);
    }
}

async function getUser(req, res, next) {
    try {
        const data = await User.getUser(req.params.id);
        res.status(200).send(data);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

async function addUser(req, res, next) {
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

async function updateUser(req, res, next) {
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    try {
        const data = await User.updateUser({
            id: req.body.id,
            username: req.body.username,
            password: hashedPassword,
            role: req.body.role,
            store_id: req.body.store_id,
        });
        res.status(200).send(data);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

module.exports = { getUsers, getUser, addUser, login, updateUser };
