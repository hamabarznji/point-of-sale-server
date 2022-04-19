const Employee = require("../models/Employee");

async function getEmployees(storeid) {
    try {
        if (storeid == 0) {
            return await Employee.findAll({
                include: { all: true },
            });
        } else {
            return await Employee.findAll({
                include: { all: true },
                where: {
                    store_id: storeid,
                },
            });
        }
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
        return await Employee.update(employee, { where: { id: employee.id } });
    } catch (err) {
        return err.message;
    }
}

module.exports = { updateEmployee, addEmployee, getEmployee, getEmployees };
