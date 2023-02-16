const router = require("express").Router();
const {Accounts} = require("../../models/Accounts");
const {v4: uuid} = require("uuid");
const bcrypt = require("bcrypt");

router.post("/login", async (req, res) => {
    try{
        const accountData = await Accounts.findOne({
            where: {Username: req.body.username},
        });
        if (!accountData) {
            res
                .status(400)
                .json({message: 'Incorrect username or password, please try again error'});
            return;
        } else {
            bcrypt.compare(req.body.password, accountData.Password, (err, isMatch) => {
              if (err) {
                console.log(err)
                res.status(500).json({ message: 'An error occurred, please try again' });
              }
              else if (!isMatch) {
                res
                  .status(400)
                  .json({ message: 'Incorrect username or password, please try again error ' });
              }
              else if (isMatch) {
                req.session.username = req.body.username
                console.log(req.session.logged_in);
                req.session.save(() => {
                  res.json({ user: accountData, message: 'You are now logged in!' });
                });
              }
            })
          }
        }
        catch (err) {
          console.log(err)
          res.status(400).json(err);
}
});

router.get("/", async (req, res) =>{
    try{
        const accountData = await Accounts.findAll
    }
})