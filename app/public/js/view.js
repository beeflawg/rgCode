// Formatting for information - capitalize first letter of each word
const capitalize = (phrase) => {
  if (typeof phrase !== 'string') return ''
  return phrase
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Array to hold price values
var arr = [];
var sum = 0;

// Function to empty your array
function empty() {
  arr = [];
  sum = 0;
}


// When user hits the search-btn
$("#search-btn").on("click", function (event) {
  event.preventDefault();

  // Save the receipt they typed into the book-search input
  var bookSearched = $("#date-search").val().trim();

  // Make an AJAX get request to our api, including the user's receipt in the url
  $.get("/api/" + bookSearched, function (data) {

    console.log(data);
    // Call our renderBooks function to add our receipts to the page
    renderBooks(data);

  });

});

// When user hits the category-search-btn
$("#category-search-btn").on("click", function () {

  // Save the author they typed into the category-search input
  var authorSearched = $("#category-search").val().trim();

  // Make an AJAX get request to our api, including the user's category in the url
  $.get("/api/category/" + authorSearched, function (data) {

    // Log the data to the console
    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderBooks(data);

  });

});

// When user hits the name-search-btn
$("#name-search-btn").on("click", function () {

  // Save the book they typed into the name-search input
  var genreSearched = $("#name-search").val().trim();

  // Make an AJAX get request to our api, including the user's name in the url
  $.get("/api/name/" + genreSearched, function (data) {

    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderBooks(data);

  });

});

function renderBooks(data) {
  if (data.length !== 0) {

    $("#table").empty();
    $("#table").show();

    $("#total-section").empty();
    $("#total-section").show();

    // Empty Array and set Sum to 0
    empty();

    for (var i = 0; i < data.length; i++) {


      // Push price data to arr
      arr.push(data[i].price);

      var div = $("<div>");
      // div.append("<h6>Entry: " + (i + 1) + "</h6>");
      // div.append("<h6>" + moment(data[i].date).format('L') + "</h6>");
      // div.append("<h6>Category: " + capitalize(data[i].category) + "</h6>");
      // div.append("<h6>Name: " + capitalize(data[i].name) + "</h6>");
      // div.append("<h6>Price: " + data[i].price + "</h6>");
      // div.append("<button class='delete' data-id='" + data[i].id + "'>DELETE</button>");

      // Table Format
      $("#table").append("<tr>"
        + "<td>" + (i + 1) + "</td>"
        + "<td>" + moment(data[i].date).format('L') + "</td>"
        + "<td>" + capitalize(data[i].category) + "</td>"
        + "<td>" + capitalize(data[i].name) + "</td>"
        + "<td>" + data[i].price + "</td>"
        + "<td>" + "<button class='delete' data-id='" + data[i].id + "'>DELETE</button>" + "</td>"
        + "</tr>"
      );

      $("#stats").append(div);

    }

    // Console log the arr data
    console.log(arr);

    // For loop to sum arr data
    for (var i = 0; i < arr.length; i++) {
      sum += parseFloat(arr[i])
    }

    // Console log sum to check values
    console.log(sum);
    console.log(parseFloat(Math.round(sum * 100) / 100).toFixed(2));

    // To convert the number to two decimal points i.e 1.00
    sum = parseFloat(Math.round(sum * 100) / 100).toFixed(2);

    // Create div to hold the sum of arr
    var totalSection = $("<div>");
    // Add a class to this div: 'total'
    totalSection.addClass("total");
    // Add an id to the total
    totalSection.attr("id", "receipt-total")
    // Append the total to the total section
    $("#total-section").append(totalSection);

    // Add total to the page
    $("#receipt-total").append("<h6>$" + sum + "</h6>");

    $(".delete").click(function () {

      $.ajax({
        method: "DELETE",
        url: "/api/book/" + $(this).attr("data-id")
      })
        // On success, run the following code
        .then(function () {
          console.log("Deleted Successfully!");
          location.reload();
        });

      $(this).closest("div").remove();

    });

  }
}
