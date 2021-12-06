const sequelize = require("../config/connection");
const {Post, User, Opinion} = require("../models")
const postData = require ("./posts.json")
const userData = require ("./users.json")
const opinionData = require ("./opinions.json")

const seed = async () => {
    await sequelize.sync({force: true});
    await Post.bulkCreate(postData);
    console.log("Your post data has been seeded.");
    await User.bulkCreate(userData, {individualHooks:true});
    console.log("Your user data has been seeded.");
    await Opinion.bulkCreate(opinionData);
    console.log("Your opinion data has been seeded.");
    process.exit(0);
};

seed()