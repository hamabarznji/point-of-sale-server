//auth
{
    /**
     * @swagger
     * tags:
     *  name: Login/Authentication
     *  description: When you login you get a token.
     * /:
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
     * /users/{id}:
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
     * /users/{id}:
     *  put:
     *      tags: [Users]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Users
     *
     * /users/{id}:
     *  delete:
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
     * /prodcuts/{id}:
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
     * /products/{id}:
     *  put:
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
     * /Stores/{id}:
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
     * /stores/{id}:
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
     * /customers:
     *  get:
     *      tags: [Customers]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Customers
     *
     * /customers/{id}:
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
     * /customers/{id}:
     *  put:
     *      tags: [Customers]
     *
     */
}
//expense
{
    /**
     * @swagger
     * tags:
     *  name: Employees
     *
     * /employees:
     *  get:
     *      tags: [Employees]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Employees
     *
     * /employees/{id}:
     *  get:
     *      tags: [Employees]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Employees
     *
     * /employees:
     *  post:
     *      tags: [Employees]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Employees
     *
     * /employees/{id}:
     *  put:
     *      tags: [Employees]
     *
     */
}

//employee
{
    /**
     * @swagger
     * tags:
     *  name: Expenses
     *
     * /expenses:
     *  get:
     *      tags: [Expenses]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Expenses
     *
     * /expenses/{id}:
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
     * /expenses/{id}:
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
     * /orders:
     *  get:
     *      tags: [Orders]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: Orders
     *
     * /orders/{id}:
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
    /**
     * @swagger
     * tags:
     *  name: Orders
     *
     * /orders/{id}:
     *  put:
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
     * /orderedProducts:
     *  get:
     *      tags: [OrderedProducts]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: OrderedProducts
     *
     * /orderedProducts/{id}:
     *  get:
     *      tags: [OrderedProducts]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: OrderedProducts
     *
     * /employees:
     *  post:
     *      tags: [OrderedProducts]
     *
     */
    /**
     * @swagger
     * tags:
     *  name: OrderedProducts
     *
     * /orderedProducts/{id}:
     *  put:
     *      tags: [OrderedProducts]
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
     * /categories/{id}:
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
    /**
     * @swagger
     * tags:
     *  name: Categories
     *
     * /categories/{id}:
     *  put:
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
     * /suppliers/{id}:
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
    /**
     * @swagger
     * tags:
     *  name: Suppliers
     *
     * /suppliers/{id}:
     *  put:
     *      tags: [Suppliers]
     *
     */
}
//Reports
{
    /**
     * @swagger
     * tags:
     *  name: Reports
     *
     * /reports/{reportType}:
     *  post:
     *      tags: [Reports]
     *
     */
}
