const router = require("express").Router();
const routes = require("../../routes.json");
const verifyAuth = require("../../middleware/verifyAuth");

const Employee = require("../controllers/Employee");

router.get(routes.employee.get.getEmployees, verifyAuth, Employee.getEmployees);
//router.get(routes.employee.get.getEmployee, verifyAuth, Employee.getEmployee);
router.post(routes.employee.addEmployee, verifyAuth, Employee.addEmployee);
router.put(routes.employee.updateEmployee, verifyAuth, Employee.updateEmployee);

module.exports = router;
