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
const verifyLoginToken = require("./middleware/verifyLoginToken");
require("./tabels");
app.use(express.json());
app.use(cors());

//User

app.post(routes.user.addUser, User.addUser);
app.post(routes.user.login.loginUser, User.login);
//app.get(routes.user.get.getUsers, verifyLoginToken, User.getUsers);
app.get(routes.user.get.getUsers, User.getUsers);
app.get(routes.user.get.getUser, User.getUser);
//app.get(routes.user.get.getUser, verifyLoginToken, User.getUser);
app.get(routes.user.delete.deleteUser, verifyLoginToken, User.deleteUser);
app.put(routes.user.updateUser, User.updateUser);

//Product
app.post(routes.product.addProduct, Product.addProduct);
app.get(routes.product.get.getProducts, Product.getProducts);
app.put(routes.product.updateProduct, Product.updateProduct);

//Customer
app.get(routes.customer.get.getCustomers, Customer.getCustomers);
app.get(routes.customer.get.getCustomer, Customer.getCustomer);
app.post(routes.customer.addCustomer, Customer.addCustomer);
app.put(routes.customer.updateCustomer, Customer.updateCustomer);

//Employee
app.get(routes.employee.get.getEmployees, Employee.getEmployees);
app.get(routes.employee.get.getEmployee, Employee.getEmployee);
app.post(routes.employee.addEmployee, Employee.addEmployee);
app.put(routes.employee.updateEmployee, Employee.updateEmployee);

//Expense
app.post(routes.expense.addExpense, Expense.addExpense);
app.put(routes.expense.updateExpense, Expense.updateExpense);
app.get(routes.expense.get.getExpenses, Expense.getExpenses);
app.get(routes.expense.get.getExpense, Expense.getExpense);

//Store
app.get(routes.store.getStores, Store.getStores);
app.post(routes.store.addStore, Store.addStore);

app.listen(process.env.PORT || 3002, () =>
    console.log(`Listening on port ${process.env.PORT}`)
);
