const Accounts = require("../models/Accounts");
const bcrypt = require("bcrypt");

let AccountData = [
{
    Username: "coderMaster",
    Password: "password123456",
    Email: "codemaster@gmail.com"
},
{
    Username: "techtips22",
    Password: "password123456",
    Email: "tt22@gmail.com"
},
{
    Username: "PCCHAMP",
    Password: "password123456",
    Email: "pcchamp@gmail.com"
}
];
const seedAccount = async () => {
    for (let i = 0; i < AccountData.length; i++) {
      const hashedPassword = await bcrypt.hash(AccountData[i].Password, 10);
      AccountData[i].Password = hashedPassword;
    }
    console.log(AccountData);
    Accounts.bulkCreate(AccountData);
  }
module.exports = seedAccount;