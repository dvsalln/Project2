/* 
***********************************************
*Author: LazyLoaders                          *
*Project 2: Friendify                         *
*UCB Extension - Full-Stack Bootcamp          *
*September 2018                               *
*********************************************** 
*/

module.exports = function (sequelize, DataTypes){
    var Friend = sequelize.define("Friend", {
        profilePhoto: DataTypes.BLOB,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        age: DataTypes.INTEGER,
        password: DataTypes.STRING,
        gender: DataTypes.STRING,
        occupation: DataTypes.STRING,
        location: DataTypes.STRING,
        summary: DataTypes.TEXT,
        interests: DataTypes.TEXT,
    });
    return Friend;
}