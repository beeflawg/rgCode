// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// var Book = require("../models/book.js");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all books
  app.get("/api/all", function(req, res) {
    db.Book.findAll({}).then(function(dbBook) {
      res.json(dbBook);
    });
  });

  // Get a specific book
  app.get("/api/:date", function(req, res) {
    db.Book.findAll({
      where: {
        date: req.params.date
      }
    }).then(function(dbBook) {
      res.json(dbBook);
    });
  });

  // Get all books of a specific genre
  app.get("/api/category/:category", function(req, res) {
    db.Book.findAll({
      where: {
        category: req.params.category
      }
    }).then(function(dbBook) {
      res.json(dbBook);
    });
  });

  // Get all books from a specific author
  app.get("/api/name/:name", function(req, res) {
    db.Book.findAll({
      where: {
        name: req.params.name
      }
    }).then(function(dbBook) {
      res.json(dbBook);
    });
  });

  // Get all "long" books (books 150 pages or more)
  app.get("/api/books/long", function(req, res) {
    db.Book.findAll({
      where: {
        price: {
          $gte: 50
        }
      },
      order: [["price", "DESC"]]
    }).then(function(dbBook) {
      res.json(dbBook);
    });
  });

  // Get all "short" books (books 150 pages or less)
  app.get("/api/books/short", function(req, res) {
    db.Book.findAll({
      where: {
        price: {
          $lte: 50
        }
      },
      order: [["price", "ASC"]]
    }).then(function(dbBook) {
      res.json(dbBook);
    });
  });

  // Add a book
  app.post("/api/new", function(req, res) {
    console.log("Book Data:");
    console.log(req.body);
    db.Book.create({
      date: req.body.date,
      category: req.body.category,
      name: req.body.name,
      price: req.body.price
    }).then(function(dbBook) {
      res.json(dbBook);
    });
  });

  // Delete a book
  app.delete("/api/book/:id", function(req, res) {
    console.log("Book ID:");
    console.log(req.params.id);
    db.Book.destroy({
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.end();
    });
  });
};
