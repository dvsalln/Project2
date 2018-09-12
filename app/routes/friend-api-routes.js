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


    app.post("/api/new", function (req, res) {
        console.log("New Friend: ");
        console.log(req.body);

        Friend.create(req.body).then(function (data) {
            res.json(data);

        });

    });

    // Use Handlebars to render the main index.html page with the movies in it.
    app.get("/api/profile/:id", function (req, res) {

        Friend.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            // return res.json(result);
            res.render("profile", result);
        });
    });
};