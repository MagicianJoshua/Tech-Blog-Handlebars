const Comment = require('../models/Comment')
const commentData = 
[
    {
        id: 1,
        comment_text:"I think sql SUCKS",
        user_id:1,
        post_id:1,
    }
  
];
const commentSeed = () => Comment.bulkCreate(commentData);

module.exports = commentSeed;