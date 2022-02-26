const User = require("../models/User");
const bcrypt = require("bcrypt");

const getUsers = async () => {
    try {
        return await User.findAll();
    } catch (err) {
        return err.message;
    }
};
const getUser = async (id) => {
    try {
        return await User.findOne({ where: { id: id } });
    } catch (err) {
        return err.message;
    }
};

const login = async (username) => {
    try {
        return await User.findOne({ where: { username: username } });
    } catch (err) {
        return err.message;
    }
};

const addUser = async ({ username, password, role, store_id }) => {
    try {
        return await User.create(username, password, role, store_id);
    } catch (err) {
        return err.message;
    }
};
const updateUser = async (username, password) => {
    try {
        return await User.update(password);
    } catch (err) {
        return err.message;
    }
};
const deleteUser = async (id) => {
    try {
        return await User.destroy({ where: { id: id } });
    } catch (err) {
        return err.message;
    }
};

module.exports = { getUsers, getUser, addUser, deleteUser, login };
