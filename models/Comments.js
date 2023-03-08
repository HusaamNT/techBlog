const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Comments extends Model {}

Comments.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
      },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    authorId: {
        type: DataTypes.INTEGER,
            reference:{
            model:"account",
            key:"id"
          } 
    },
    postId: {
        type: DataTypes.INTEGER,
            reference:{
            model:"post",
            key:"id"
          } 
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: false,
    modelName: "comments",
  }
);

module.exports = Comments;