const Posts = require('./Posts');
const Accounts = require('./Accounts');

Accounts.hasMany(Posts, {
    foreignKey: 'account_id'
})

Posts.belongsTo(Accounts, {
    foreignKey: 'account_id'
})

module.exports = {
    Accounts,
    Posts,
}