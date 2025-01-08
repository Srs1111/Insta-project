const { Sequelize, DataTypes } = require("sequelize");
const sequlize = require("../config/config");

const User = sequlize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobileNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isNumeric: true,
      len: [10, 15],
      //  mobile number should be between 10 and 15 digits
    },
  },
  address: {
    tyep: DataTypes.STRING,
    allowNull: true,
  },
  postCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = { User };
