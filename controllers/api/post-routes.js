const router = require("express").Router();
const Posts = require("../../models/Posts");
const Comments = require("../../models/Comments");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  try {
    const postData = await Posts.findAll();
    console.log(postData);
    res.status(200).json(postData);
  } catch (err) {
    console.log(err)
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

router.post("/post", async (req, res) => {
    try{
      if (!req.user) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
      const postData = {
        title: req.body.title,
        bio: req.body.bio,
        author: req.user.id
      }
      const post = await Post.create(postData);
      
      const commentData = {
        content: req.body.comment,
        authorId: req.user.id,
        postId: post.id
    }
    const comment = await Comments.create(commentData);
    return res.status(201).json({ post, comment });

    } catch(err){
      console.error(err);
      return res.status(500).json({ error: 'Server Error' });
    }
  })


});
module.exports = router;
