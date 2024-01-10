const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

User.hasMany(Post, {
    foreignKey:"user_id"
})
Post.belongsTo(User, {
    foreignKey:"user_id",
    onDelete:"CASCADE",
});


User.hasMany(Comment, {
    foreignKey:"user_id",
    onDelete:"CASCADE"
})
Comment.belongsTo(User, {
    foreignKey:"user_id",
    onDelete:"CASCADE"
})



Post.hasMany(Comment,{
    foreignKey:"post_id",
    as:"comments",
    onDelete:"CASCADE"
})
Comment.belongsTo(Post,{
    foreignKey:"post_id",
    as:"post",
    onDelete:"CASCADE",
})

module.exports = {Post,User,Comment};