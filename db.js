const Sequelize = require("sequelize");
const dbName = "point-of-sale";
const sequelize = new Sequelize(dbName, "root", "", {
    host: "localhost",

    dialect: "mysql",
    operatorsAlias: false,
});

sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((err) => console.log("Unable to connect to the database." + err));
module.exports = sequelize;
