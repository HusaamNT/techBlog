const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Posts extends Model {}

Posts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
    Bio: {
      type: DataTypes.STRING,
    },
    account_id:{
      type: DataTypes.INTEGER,
      reference:{
      model:"account",
      key:"id"
    } 
  }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: false,
    modelName: "posts",
  }
);

module.exports = Posts;