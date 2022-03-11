const User = require("../models/User");

const getUsers = async () => {
    try {
        return await User.findAll({ include: { all: true } });
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

const addUser = async (user) => {
    try {
        return await User.create(user);
    } catch (err) {
        return err.message;
    }
};
const updateUser = async (user) => {
    try {
        return await User.update(user, { where: { id: user.id } });
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

module.exports = { getUsers, getUser, addUser, deleteUser, login, updateUser };
