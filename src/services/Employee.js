const Employee = require("../models/Employee");

async function getEmployees() {
    try {
        return await Employee.findAll();
    } catch (err) {
        return err.message;
    }
}

async function getEmployee(id) {
    try {
        return await Employee.findOne({ where: { id: id } });
    } catch (err) {
        return err.message;
    }
}

async function addEmployee(employee) {
    try {
        return await Employee.create(employee);
    } catch (err) {
        return err.message;
    }
}
async function updateEmployee(employee) {
    try {
        return await Employee.update(employee);
    } catch (err) {
        return err.message;
    }
}

module.exports = { updateEmployee, addEmployee, getEmployee, getEmployees };
