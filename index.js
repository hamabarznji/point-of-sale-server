require("dotenv").config();
const express = require("express");
const swg = require("./swaggerDoc");
var cors = require("cors");
const SwaggerRouter = require("./swaggerDoc");
const routes = require("./routes.json");
const app = express();

//routers
const CategoryRouter = require("./src/routers/category");
const CustomerRouter = require("./src/routers/category");
const EmployeeRouter = require("./src/routers/employee");
const ExpenseRouter = require("./src/routers/expense");
const OrderRouter = require("./src/routers/user");
const OrderedProductRouter = require("./src/routers/user");
const ProductRouter = require("./src/routers/user");
const StoreRouter = require("./src/routers/user");
const SupplierRouter = require("./src/routers/user");
const UserRouter = require("./src/routers/user");

require("./tabels");
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

app.use(SwaggerRouter);

/**
 * @swagger
 * /customers:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */

app.listen(process.env.PORT || 3002, () =>
    console.log(`Listening on port ${process.env.PORT}`)
);
