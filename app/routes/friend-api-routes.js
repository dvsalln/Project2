// Requiring our models
var db = require("../models/friend.js");

var Friend = require("../models/friend.js")
module.exports = function (app) {

    // POST route for registering a new user
    app.post("/api/signup", function (req, res) {
        db.Friend.create(req.body).then(function (dbSignup) {
            res.json(dbSignup);
        });
    });


    app.post("/api/new", function(req, res){
        console.log("New Friend: ");
        console.log(req.body);

       Friend.create({
            firstName: req.body.firstName, 
            lastName: req.body.lastName,
            email: req.body.email,
            age: req.body.age,
            password: req.body.password,
            gender: req.body.gender,
            occupation: req.body.occupation,
            location: req.body.location,
            summary: req.body.summary,
            interests: req.body.interests
        });
    });

};