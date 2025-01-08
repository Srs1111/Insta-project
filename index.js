require("dotenv").config();
const express = require("express");
const { Sequelize } = require("sequelize");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();
app.use(express.json());

app.use("/users", userRoutes);

app.use("/posts", postRoutes);

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_NAME = process.env.DB_NAME;
const PORT = process.env.PORT || 3000;

const sequelize = new Sequelize(DB_NAME, DB_USER, {
  host: DB_HOST,
  dialect: "mysql",
});
//routes

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected");

    await sequelize.sync({ alter: true });
  } catch (error) {
    console.error("Database connection failed:", error);
  }
})();

app.listen(PORT, () => {
  console.log("server is running on port 3000");
});
