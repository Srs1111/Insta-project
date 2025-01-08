const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const User = require("./user");
// User module for  to define associations

const Post = sequelize.define("Post", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  images: {
    type: DataTypes.STRING,
    allowNull: true,
    // strore image Url as a comma-seprated string
  },
  userID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
});

Post.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE" });
User.hasMany(Post, { foreignKey: "userId" });

module.exports = Post;
