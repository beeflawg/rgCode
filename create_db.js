var mysql = require("mysql");

var con = mysql.createConnection({
    user: "root",
    password: "root",
    host: "127.0.0.1",
    port : 8889,
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE itemize_receipts", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});