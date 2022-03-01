require("dotenv").config();
const express = require("express");
var cors = require("cors");

const routes = require("./routes.json");
const app = express();
const User = require("./src/controllers/User");
const Product = require("./src/controllers/Product");
const Customer = require("./src/controllers/Customer");
const Employee = require("./src/controllers/Employee");
const Expense = require("./src/controllers/Expense");
const Store = require("./src/controllers/Store");
const verifyAuth = require("./middleware/verifyAuth");
require("./tabels");
app.use(express.json());
app.use(cors());

//User

app.post(routes.user.login.loginUser, User.login);
app.post(routes.user.addUser, verifyAuth, User.addUser);
app.get(routes.user.get.getUsers, verifyAuth, User.getUsers);
app.get(routes.user.get.getUser, verifyAuth, User.getUser);
app.get(routes.user.delete.deleteUser, verifyAuth, User.deleteUser);
app.put(routes.user.updateUser, verifyAuth, User.updateUser);

//Product
app.post(routes.product.addProduct, Product.addProduct);
app.get(routes.product.get.getProducts, verifyAuth, Product.getProducts);
app.put(routes.product.updateProduct, Product.updateProduct);

//Customer
app.get(routes.customer.get.getCustomers, verifyAuth, Customer.getCustomers);
app.get(routes.customer.get.getCustomer, verifyAuth, Customer.getCustomer);
app.post(routes.customer.addCustomer, verifyAuth, Customer.addCustomer);
app.put(routes.customer.updateCustomer, verifyAuth, Customer.updateCustomer);

//Employee
app.get(routes.employee.get.getEmployees, verifyAuth, Employee.getEmployees);
app.get(routes.employee.get.getEmployee, verifyAuth, Employee.getEmployee);
app.post(routes.employee.addEmployee, verifyAuth, Employee.addEmployee);
app.put(routes.employee.updateEmployee, verifyAuth, Employee.updateEmployee);

//Expense
app.post(routes.expense.addExpense, verifyAuth, Expense.addExpense);
app.put(routes.expense.updateExpense, verifyAuth, Expense.updateExpense);
app.get(routes.expense.get.getExpenses, verifyAuth, Expense.getExpenses);
app.get(routes.expense.get.getExpense, verifyAuth, Expense.getExpense);

//Store
app.get(routes.store.getStores, verifyAuth, Store.getStores);
app.post(routes.store.addStore, verifyAuth, Store.addStore);

app.listen(process.env.PORT || 3002, () =>
    console.log(`Listening on port ${process.env.PORT}`)
);
