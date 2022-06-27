require("dotenv").config();
const jwt = require("jsonwebtoken");
const express = require("express");
var cors = require("cors");
const SwaggerRouter = require("./src/routers/Swagger");
const app = express();

//routers
const CategoryRouter = require("./src/routers/Category");
const CustomerRouter = require("./src/routers/Customer");
const EmployeeRouter = require("./src/routers/Employee");
const ExpenseRouter = require("./src/routers/Expense");
const OrderRouter = require("./src/routers/Order");
const OrderedProductRouter = require("./src/routers/OrderedProduct");
const ProductRouter = require("./src/routers/Product");
const StoreRouter = require("./src/routers/Store");
const SupplierRouter = require("./src/routers/Supplier");
const UserRouter = require("./src/routers/User");
const TransfareedProductRouter = require("./src/routers/TransfareedProduct");
const DashboardRouter = require("./src/routers/Dashboard");
const PaymentRouter = require("./src/routers/Payment");

app.use(express.json());
app.use(cors());

app.get("/login/auth", (req, res) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send("Unauthorized");
    const token = authorization.split(" ")[1];

    if (token == null || token == "null") {
        res.status(200).send(false);
        return;
    }
    try {
        jwt.verify(token, "fyp");
        const userInfo = jwt.decode(token);
        const info = { isAuth: true, user: userInfo };

        res.status(200).send(info);
        next();
    } catch (error) {
        res.status(401).send(false);
    }
});

app.use(CategoryRouter);
app.use(CustomerRouter);
app.use(EmployeeRouter);
app.use(ExpenseRouter);
app.use(OrderRouter);
app.use(OrderedProductRouter);
app.use(ProductRouter);
app.use(StoreRouter);
app.use(SupplierRouter);
app.use(UserRouter);
app.use(TransfareedProductRouter);
app.use(PaymentRouter);
app.use(DashboardRouter);
app.use(SwaggerRouter);

app.listen(3002, () => console.log(`Listening on port 3002`));

module.exports = app;
////sudo /opt/lampp/lampp start
