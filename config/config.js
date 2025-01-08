require("dotenv").config();
const { Sequelize } = require("sequelize");
const { Sequelize } = require("sequelize");
require("dotenv").config();

const DB_HOST = process.env.Db_HOST;
const DB_USER = process.env.DB_USER;
const DB_NAME = process.env.DB_NAME;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialetc: "mysql",
  logging: false,
});
module.exports = sequelize;
