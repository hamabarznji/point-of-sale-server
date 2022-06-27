//auth
{
    /**
     * @swagger
     * tags:
     *  name: Login/Authentication
     *  description: When you login you get a token.
     * /login:
     *  post:
     *      tags: [Login/Authentication]
     *      requestBody:
     *          required: true
     *          content:
     *              application/json:
     *                  schema:
     *                      type: object
     *                      properties:
     *                          email:
     *                              type: string
     *                              default: coder
     *                          password:
     *                              type: string
     *                              default: coder123
     *      responses:
     *          default:
     *              description: This is the default response for it
     */
    /**
     * @swagger
     * tags:
     *  name: Login/Authentication
     * /login/auth:
     *  get:
     *      tags: [Login/Authentication]
   
     */
}

//user
{
    /**
     * @swagger
     * tags:
     *  name: Users
     *
     * /users:
     *  get:
     *      tags: [Users]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Users
     *
     * /users/:id:
     *  get:
     *      tags: [Users]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Users
     *
     * /users:
     *  post:
     *      tags: [Users]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Users
     *
     * /users/:id:
     *  put:
     *      tags: [Users]
     *
     */
}
//products
{
    /**
     * @swagger
     * tags:
     *  name: Products
     *
     * /products:
     *  get:
     *      tags: [Products]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Products
     *
     * /prodcuts/:id:
     *  get:
     *      tags: [Products]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Products
     *
     * /products:
     *  post:
     *      tags: [Products]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Products
     *
     * /products/:id:
     *  put:
     *      tags: [Products]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Products
     *
     * /products/stores/:storeid/notifications:
     *  get:
     *      tags: [Products]
     *
     */
}
//stores
{
    /**
     * @swagger
     * tags:
     *  name: Stores
     *
     * /Stores:
     *  get:
     *      tags: [Stores]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Stores
     *
     * /Stores/:id:
     *  get:
     *      tags: [Stores]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Stores
     *
     * /reports/stores/:id/reports:
     *  get:
     *      tags: [Stores]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Stores
     *
     * /Stores:
     *  post:
     *      tags: [Stores]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Stores
     *
     * /stores/:id:
     *  put:
     *      tags: [Stores]
     *
     */
}

//customer
{
    /**
     * @swagger
     * tags:
     *  name: Customers
     *
     * /customers/stores/:storeid:
     *  get:
     *      tags: [Customers]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Customers
     *
     * /customers/:id:
     *  get:
     *      tags: [Customers]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Customers
     *
     * /customers:
     *  post:
     *      tags: [Customers]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Customers
     *
     * /customers/:id/reports:
     *  get:
     *      tags: [Customers]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Customers
     *
     * /customers/:id:
     *  put:
     *      tags: [Customers]
     *
     */
}
//exmployees
{
    /**
     * @swagger
     * tags:
     *  name: Employees
     *
     * /employees/stores/:storeid:
     *  get:
     *      tags: [Employees]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Employees
     *
     * /employeess:
     *  post:
     *      tags: [Employees]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Employees
     *
     * /employees/:id:
     *  put:
     *      tags: [Employees]
     *
     */
}
//expense
{
    /**
     * @swagger
     * tags:
     *  name: Expenses
     *
     * /expenses/stores/:storeid:
     *  get:
     *      tags: [Expenses]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Expenses
     *
     * /expenses:
     *  post:
     *      tags: [Expenses]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Expenses
     *
     * /expenses/:id:
     *  put:
     *      tags: [Expenses]
     *
     */
}

//order
{
    /**
     * @swagger
     * tags:
     *  name: Orders
     *
     * /orders/stores/:storeid:
     *  get:
     *      tags: [Orders]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Orders
     *
     * /orders/:customerphone:
     *  get:
     *      tags: [Orders]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Orders
     *
     * /orders:
     *  post:
     *      tags: [Orders]
     *
     */
}

//orderedProduct
{
    /**
     * @swagger
     * tags:
     *  name: OrderedProducts
     *
     * /orderedproducts/orders/:orderId:
     *  get:
     *      tags: [OrderedProducts]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: OrderedProducts
     *
     * /orderedproducts:
     *  post:
     *      tags: [OrderedProducts]
     *
     */
}

//transfareedProducts
{
    /**
     * @swagger
     * tags:
     *  name: TransfareedProducts
     *
     * /transfareedproducts:
     *  get:
     *      tags: [TransfareedProducts]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: TransfareedProducts
     *
     * /transfareedproducts/stores/:storeId:
     *  get:
     *      tags: [TransfareedProducts]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: TransfareedProducts
     *
     * /transfareedproducts/stores/:storeId/notifications:
     *  get:
     *      tags: [TransfareedProducts]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: TransfareedProducts
     *
     * /transfareedproducts:
     *  post:
     *      tags: [TransfareedProducts]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: OrderedProducts
     *
     * /transfareedproducts:
     *  put:
     *      tags: [TransfareedProducts]
     *
     */
}

//Categories
{
    /**
     * @swagger
     * tags:
     *  name: Categories
     *
     * /categories:
     *  get:
     *      tags: [Categories]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Categories
     *
     * /categories:
     *  post:
     *      tags: [Categories]
     *
     */
}

//Suppliers
{
    /**
     * @swagger
     * tags:
     *  name: Suppliers
     *
     * /suppliers:
     *  get:
     *      tags: [Suppliers]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Suppliers
     *
     * /suppliers:
     *  post:
     *      tags: [Suppliers]
     *
     */
}
//Dashboard
{
    /**
     * @swagger
     * tags:
     *  name: Dashboard
     *
     * /dashboard/stores/:storeid:
     *  get:
     *      tags: [Dashboard]
     *
     */
} //Payment
{
    /**
     * @swagger
     * tags:
     *  name: Payments
     *
     * /payments:
     *  post:
     *      tags: [Payments]
     *
     */
}
