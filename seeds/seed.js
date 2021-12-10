const sequelize = require("../config/connection");
const {Gopro, User, Review} = require("../models")
const goproData = require ("./gopro.json")
const userData = require ("./user.json")
const reviewData = require ("./review.json")

const seedDatabase = async () => {
    await sequelize.sync({force: true});
    
    await Gopro.bulkCreate(goproData);
    console.log("Your gopro data has been seeded.");

    await User.bulkCreate(userData);
    console.log("Your user data has been seeded.");

    await Review.bulkCreate(reviewData);
    console.log("Your review data has been seeded.");



    process.exit(0);
};

seedDatabase()






//await Review.bulkCreate(reviewData);
//console.log('Your review data has been seeded.');