const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Opinion extends Model {}

Opinion.init({
    like: {
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    review: {
        type:DataTypes.TEXT,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},{
    sequelize
});

module.exports = Opinion;