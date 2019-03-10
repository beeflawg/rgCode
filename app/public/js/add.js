// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // Make a newBook object
  var newBook = {
    date: $("#date").val().trim(),
    category: $("#category").val().trim(),
    name: $("#name").val().trim(),
    price: $("#price").val().trim()
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newBook)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#date").val("");
  $("#category").val("");
  $("#name").val("");
  $("#price").val("");

});
