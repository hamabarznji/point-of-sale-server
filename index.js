require("dotenv").config();
const jwt = require("jsonwebtoken");

const express = require("express");
var cors = require("cors");
const SwaggerRouter = require("./src/routers/swagger");
const app = express();

//routers
const CategoryRouter = require("./src/routers/category");
const CustomerRouter = require("./src/routers/customer");
const EmployeeRouter = require("./src/routers/employee");
const ExpenseRouter = require("./src/routers/expense");
const OrderRouter = require("./src/routers/order");
const OrderedProductRouter = require("./src/routers/orderedProduct");
const ProductRouter = require("./src/routers/product");
const StoreRouter = require("./src/routers/store");
const SupplierRouter = require("./src/routers/supplier");
const UserRouter = require("./src/routers/user");
const TransfareedProductRouter = require("./src/routers/TransfareedProduct");
const DashboardRouter = require("./src/routers/Dashboard");
const PaymentRouter = require("./src/routers/Payment");

app.use(express.json());
app.use(cors());

app.get("/auth", (req, res) => {
    res.send("Hello World");
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

/* app.get("/auth", async (req, res, next) => {
    try {
        try {
            const verify = jwt.verify(
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IjEiLCJpYXQiOjE2NDg5Mjg5NTR9.XF8e-Uk8YHBGW4tIY54IPcuvYrh-EIlVPEv_1KH9uQA",
                process.env.SECRETKEY
            );

            res.send(!!verify);
        } catch (error) {
            res.status(401).send("Unauthorized");
        }
    } catch (error) {
        res.status(401).send("Unauthorized");
    }
}); */

app.listen(process.env.PORT || 3002, () =>
    console.log(`Listening on port ${process.env.PORT}`)
);
