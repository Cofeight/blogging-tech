const Gopro = require("./Gopro")
const User = require("./User")
const Review = require("./Review")

User.hasMany(Review, {
    onDelete: "CASCADE"
});

Review.belongsTo(User);
Gopro.hasMany(Review, {
    onDelete: "CASCADE"
});

Review.belongsTo(Gopro);

User.belongsToMany(Gopro, {
    as:"favorites",
    through:"UserGopro"
})

Gopro.belongsToMany(User, {
    through:"UserGopro"
})

module.exports = {
    Gopro,
    User,
    Review
}
