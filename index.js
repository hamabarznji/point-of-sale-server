require("dotenv").config();
const express = require("express");
var cors = require("cors");

const routes = require("./routes.json");
const app = express();
const User = require("./src/controllers/User");
const Product = require("./src/controllers/Product");
const Customer = require("./src/controllers/Customer");
const verifyLoginToken = require("./middleware/verifyLoginToken");
require("./tabels");
app.use(express.json());
app.use(cors());

//User
app.post(routes.user.add.addUser, User.addUser);
app.post(routes.user.login.loginUser, User.login);
app.get(routes.user.get.getUsers, verifyLoginToken, User.getUsers);
app.get(routes.user.get.getUser, verifyLoginToken, User.getUser);
app.get(routes.user.delete.deleteUser, verifyLoginToken, User.deleteUser);

//Product
app.post(routes.product.addProduct, Product.addProduct);
app.get(routes.product.get.getProducts, Product.getProducts);
app.put(routes.product.updateProduct, Product.updateProduct);

//Customer
app.get(routes.customer.get.getCustomers, Customer.getCustomers);
app.get(routes.customer.get.getCustomer, Customer.getCustomer);
app.post(routes.customer.addCustomer, Customer.addCustomer);
app.put(routes.customer.updateCustomer, Customer.updateCustomer);

app.listen(process.env.PORT || 3002, () =>
    console.log(`Listening on port ${process.env.PORT}`)
);
