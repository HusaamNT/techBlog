const Posts = require("../models/Posts");

const postsData = [
{
    Bio: "Welcome to my tech page!",
    account_id:1
},
{
    Bio: "This code will help you out to stay active on a Teams chat!",
    account_id:1
},
{
    Bio: "New aPhone looks crazy!",
    account_id:2
},
{
    Bio: "Any thoughts on the new Dell pc?",
    account_id:2
},
{
    Bio: "checkout my new pc build",
    account_id:3
},
{
    Bio: "the newest mvidia gpus arent worth the price for the performance increase",
    account_id:3
}
];

const seedPost = () => Posts.bulkCreate(postsData);

module.exports = seedPost;