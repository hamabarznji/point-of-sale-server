const Sequelize = require("sequelize");
const sequelize = new Sequelize("point-of-sale", "root", "", {
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
