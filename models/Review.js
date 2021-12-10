const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init({
    rating: {
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    review: {
        type:DataTypes.TEXT,
        allowNull: false,
    }
},{
    sequelize
});

module.exports = Review;