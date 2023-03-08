const Posts = require("./Posts");
const Accounts = require("./Accounts");

Accounts.hasMany(Posts, {
  foreignKey: "account_id",
});

Posts.belongsTo(Accounts, {
  foreignKey: "account_id",
});

Posts.hasMany(Comments, {
  foreignKey: "postId",
});

Comment.belongsTo(models.Post, {
  foreignKey: "postId",
});
module.exports = {
  Accounts,
  Posts,
};
