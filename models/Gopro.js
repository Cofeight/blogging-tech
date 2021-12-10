const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Gopro extends Model {}

Gopro.init({
    model: {
        type: DataTypes.STRING,
        unique: true,
    },
    image: {
        type: DataTypes.STRING, 
        unique:true,
    }
},{
    sequelize
});

module.exports = Gopro;
