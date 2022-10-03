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
                name: "Mohammed Othman",
            },
            servers: [{ url: "http://localhost:3002" }],
        },
    },
    // ['.routes/*.js']
    apis: ["apiDoc.js"],
};

const swaggerDocs = swaggerjsdoc(swaggerOptions);

router.use("/apidocs", swaggerui.serve, swaggerui.setup(swaggerDocs));

module.exports = router;
