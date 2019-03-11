// Formatting for information - capitalize first letter of each word
const capitalize = (phrase) => {
  if (typeof phrase !== 'string') return ''
  return phrase
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Make a get request to our api route that will return every "long" receipt ($50 or more)
$.get("/api/books/long", function (data) {

  // Array to hold price values
  var arr = [];
  var sum = 0;

  // For each book that our server sends us back
  for (var i = 0; i < data.length; i++) {

    // Push price data to arr
    arr.push(data[i].price);

    // Create a parent div to hold receipt data
    var wellSection = $("<div>");
    // Add a class to this div: 'well'
    wellSection.addClass("well");
    // Add an id to the well to mark which well it is
    wellSection.attr("id", "book-well-" + i);
    // Append the well to the well section
    $("#well-section").append(wellSection);

    // Now  we add our receipt data to the well we just placed on the page
    // Div Format
    // $("#book-well-" + i).append("<h6>Entry: " + (i + 1) + "</h6>");
    // $("#book-well-" + i).append("<h6>" + moment(data[i].date).format('L') + "</h6>");
    // $("#book-well-" + i).append("<h6>Category: " + capitalize(data[i].category) + "</h6>");
    // $("#book-well-" + i).append("<h6>Name: " + capitalize(data[i].name) + "</h6>");
    // $("#book-well-" + i).append("<h6>Price: $" + data[i].price + "</h6>");
    // $("#book-well-" + i).append("<button class='delete' data-id='" + data[i].id + "'>DELETE</button>");

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
});
