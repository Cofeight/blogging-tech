const User = require("./User")
const Post = require("./Post")
const Opinion = require("./Opinion")

User.hasMany(Opinion,{
    onDelete: "CASCADE"
});

Opinion.belongsTo(User);

Post.hasMany(Opinion,{
    onDelete: "CASCADE"
});

Opinion.belongsTo(Post);

User.belongsToMany(Post, {
    as:"thoughts",
    through:"UserPosts"
})

Post.belongsToMany(User, {
    through:"UserPosts"
})

module.exports = {
    User, 
    Post,
    Opinion
}