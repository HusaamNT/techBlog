const seedAccount = require("./accounts");
const seedPost = require("./posts")

const sequelize = require('../config/connection');

const seedAll = async () => {

    await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedAccounts();
  console.log('\n----- ACCOUNTS SEEDED -----\n');

  await seedPost();
  console.log('\n----- POST SEEDED -----\n');
};

module.exports = seedAll();