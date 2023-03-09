const Posts = require("./Posts");
const Accounts = require("./Accounts");
const Comments = require("./Comments");

Accounts.hasMany(Posts, {
  foreignKey: "account_id",
});

Posts.belongsTo(Accounts, {
  foreignKey: "account_id",
});

Posts.hasMany(Comments, {
  foreignKey: "postId",
});

Comments.belongsTo(Posts, {
  foreignKey: "postId",
});
module.exports = {
  Accounts,
  Posts,
};
