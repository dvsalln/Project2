/* 
***********************************************
*Author: LazyLoaders                          *
*Project 2: Friendify                         *
*UCB Extension - Full-Stack Bootcamp          *
*September 2018                               *
*********************************************** 
*/


// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
<<<<<<< HEAD
var path = require('path');

=======
var path = require("path");
>>>>>>> 482d05b213ed27246b26232d90336cb9e9855a30
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8888;

// Requiring our models for syncing
// var db = require("./models");
<<<<<<< HEAD
=======

>>>>>>> master

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
<<<<<<< HEAD
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, 'app/public')));


=======
app.use(express.static("views"));
>>>>>>> master

=======
app
.use(express.static("views"));
>>>>>>> 482d05b213ed27246b26232d90336cb9e9855a30
// Routes
// =============================================================
require("./app/routes/friend-api-routes.js")(app);
require("./app/routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
<<<<<<< HEAD
// db.sequelize.sync().then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
=======
// db.sequelize.sync({ force: false }).then(function() {
  
>>>>>>> master
// });

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


<<<<<<< HEAD


=======
>>>>>>> master
