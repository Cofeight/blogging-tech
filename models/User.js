const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {}

User.init({
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING, 
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len:[8]
        }
    },

},{
    sequelize,
    hooks: {
        beforeCreate:userObj =>{
            userObj.password = bcrypt.hashSync(userObj.password,8);
            return userObj;
        },
        beforeUpdate:userObj =>{
            userObj.password = bcrypt.hashSync(userObj.password,8);
            return userObj;
        },   
    }
});

module.exports = User