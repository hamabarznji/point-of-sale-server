const Employee = require("../models/Employee");

async function getEmployees() {
    try {
        return await Employee.findAll({ include: { all: true } });
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
    console.log(employee.id);
    try {
        return await Employee.update(employee, { where: { id: employee.id } });
    } catch (err) {
        return err.message;
    }
}

module.exports = { updateEmployee, addEmployee, getEmployee, getEmployees };
