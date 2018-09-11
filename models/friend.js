/* 
***********************************************
*Author: LazyLoaders                          *
*Project 2: Friendify                         *
*UCB Extension - Full-Stack Bootcamp          *
*September 2018                               *
*********************************************** 
*/

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

var Friend = sequelize.define("Friend", {
    // profilePhoto: DataTypes.BLOB,
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: Sequelize.STRING,
    age: Sequelize.INTEGER,
    password: Sequelize.STRING,
    gender: Sequelize.STRING,
    occupation: Sequelize.STRING,
    location: Sequelize.STRING,
    summary: Sequelize.TEXT,
    interests: Sequelize.TEXT
});

Friend.sync();

module.exports = Friend;
 