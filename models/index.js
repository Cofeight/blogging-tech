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

module.exports = {
    User, 
    Post,
    Opinion
}