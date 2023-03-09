const Posts = require("../models/Posts");

const postsData = [
{
    title: "Welcome to my tech page!",
    bio: "Hi there, welcome to my page, this post is epic, please comment to show your support!",
    account_id:1
},
{
    title: "This code will help you out to stay active on a Teams chat!",
    bio: "Hi there, welcome to my page, this post is epic, please comment to show your support!",
    account_id:1
},
{
    title: "New aPhone looks crazy!",
    bio: "Hi there, welcome to my page, this post is epic, please comment to show your support!",
    account_id:2
},
{
    title: "Any thoughts on the new Dell pc?",
    bio: "Hi there, welcome to my page, this post is epic, please comment to show your support!",
    account_id:2
},
{
    title: "checkout my new pc build",
    bio: "Hi there, welcome to my page, this post is epic, please comment to show your support!",
    account_id:3
},
{
    title: "the newest mvidia gpus arent worth the price for the performance increase",
    bio: "Hi there, welcome to my page, this post is epic, please comment to show your support!",
    account_id:3
}
];

const seedPost = () => Posts.bulkCreate(postsData);

module.exports = seedPost;