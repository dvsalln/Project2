// Requiring our models
var db = require("../models");

module.exports = function (app) {

    // POST route for registering a new user
    app.post("/api/signup", function (req, res) {
        db.Friend.create(req.body).then(function (dbSignup) {
            res.json(dbSignup);
        });
    });
}