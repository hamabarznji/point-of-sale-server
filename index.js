require("dotenv").config();
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
const PaymentRouter = require("./src/routers/Payment");
app.use(express.json());
app.use(cors());

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
app.use(SwaggerRouter);

app.listen(process.env.PORT || 3002, () =>
    console.log(`Listening on port ${process.env.PORT}`)
);
