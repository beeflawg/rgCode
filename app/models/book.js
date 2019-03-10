// Creates a "Book" model that matches up with DB
module.exports = function (sequelize, DataTypes) {
  var Book = sequelize.define("Book", {
    date: { type: DataTypes.DATEONLY },
    category: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    price: { type: DataTypes.DECIMAL(10,2) }
  });

  return Book;
};

