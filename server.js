// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var PORT = process.env.PORT || 8080;
var db = require("./app/models");

// Sets up the Express app to handle data parsing
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("app/public"));

// Routes
// =============================================================
require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
