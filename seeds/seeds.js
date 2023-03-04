const Posts = require("../models/Posts");

const postsData = [
{
    
}
];

const seedPost = () => Posts.bulkCreate(postsData);

module.exports = seedPost;