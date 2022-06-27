const sequelize = require("../../db");
const Sequelize = require("sequelize");
const Store = require("./Store");

const Employee = sequelize.define(
    "employee",
    {
        id: {
            type: Sequelize.INTEGER(13),
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING(25),
            allowNull: false,

            validate: {
                notEmpty: true,
            },
        },
        store_id: {
            type: Sequelize.INTEGER(13),
            references: {
                model: Store,
                field: "id",
            },

            allowNull: false,
        },
        phone: {
            type: Sequelize.INTEGER(13),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        salary: {
            type: Sequelize.DOUBLE(10, 2),
            allowNull: false,

            validate: {
                notEmpty: true,
            },
        },
        address: {
            type: Sequelize.STRING(25),
        },
    },

    {
        freezeTableName: true,
        timestamps: false,
    }
);
Employee.belongsTo(Store, { foreignKey: "store_id", targetKey: "id" });
Store.hasMany(Employee, { foreignKey: "store_id", targetKey: "id" });

Employee.sync()
    .then((data) => console.log("Employee table created"))
    .catch((err) => console.log(err));

module.exports = Employee;
