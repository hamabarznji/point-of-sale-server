const User = require("./src/models/User");
const Customer = require("./src/models/Customer");
const Employee = require("./src/models/Employee");
const Store = require("./src/models/Store");
const Expense = require("./src/models/Expense");
const Order = require("./src/models/Order");
const OrderedProduct = require("./src/models/OrderedProduct");
const Payment = require("./src/models/Payment");
const Product = require("./src/models/Product");
const Supplier = require("./src/models/Supplier");
const Category = require("./src/models/Category");
const Transaction = require("./src/models/Transaction");

module.exports = {
    User,
    Category,
    Customer,
    Employee,
    Expense,
    Order,
    OrderedProduct,
    Payment,
    Product,
    Supplier,
    Store,
    Transaction,
};
