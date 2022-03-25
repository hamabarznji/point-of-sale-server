const Employee = require("../services/Employee");

async function addEmployee(req, res, next) {
    try {
        const employee = await Employee.addEmployee({
            id: req.body.id,
            name: req.body.name,
            store_id: req.body.store_id,
            phone: req.body.address,
            salary: req.body.salary,
            address: req.body.address,
        });

        res.status(200).send(employee);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

async function getEmployees(req, res, next) {
    try {
        const data = await Employee.getEmployees(req.params.storeid);
        const employees = data.map((employee) => {
            return {
                id: employee.id,
                name: employee.name,
                storeName: employee.store.name,
                store_id: employee.store_id,
                phone: employee.phone,
                salary: employee.salary,
                address: employee.address,
            };
        });
        res.status(200).send(employees);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

async function getEmployee(req, res, next) {
    try {
        const employee = await Employee.getEmployee(req.params.id);

        res.status(200).send(employee);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

async function updateEmployee(req, res, next) {
    try {
        const employee = await Employee.updateEmployee({
            id: req.body.id,
            name: req.body.name,
            store_id: req.body.store_id,
            phone: req.body.address,
            salary: req.body.salary,
            address: req.body.address,
        });

        res.status(200).send(employee);
    } catch (erorr) {
        res.status(404).send(erorr);
    }
}

module.exports = { updateEmployee, addEmployee, getEmployee, getEmployees };
