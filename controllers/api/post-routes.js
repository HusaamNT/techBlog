const router = require("express").Router();
const { Posts } = require("../../models/Accounts");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  try {
    const postData = await Posts.findAll();
    console.log(postData);
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const postData = await Posts.findByPk();
    if (!postData) {
      {
        res.status(404).json({ message: "Post not found" });
      }
      res.status(200).json(postData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
    