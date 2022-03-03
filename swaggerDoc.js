const swaggerjsdoc = require("swagger-jsdoc");
const swaggerui = require("swagger-ui-express");
const router = require("express").Router();

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1",
            title: "Point of Sale",
            description: "All the system URI",
            contact: {
                name: "Amazing Developer",
            },
            servers: ["http://localhost:3002"],
        },
    },
    // ['.routes/*.js']
    apis: ["index.js"],
};

const swaggerDocs = swaggerjsdoc(swaggerOptions);

router.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerDocs));

/**
 * @swagger
 * /customers:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */

module.exports = router;
