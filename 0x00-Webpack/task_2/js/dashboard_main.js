import $ from "jquery";
import _ from "lodash";

// Initialize the click counter
let clickCount = 0;

// function to update the counter and display the count
function updateCounter() {
  clickCount++;
  $("#count").text(`${clickCount} clicks on the button`);
}

// Debounce the updateCounter function to limit how often it's called
const debouncedUpdateCounter = _.debounce(updateCounter, 300);

// Add paragraph elements
$(document).ready(function () {
  $("body").append("<p>Holberton Dashboard</p>");
  $("body").append("<p>Dashboard data for the students</p>");
  // Add button element with an ID
  $("body").append("<button>Click here to get started</button>");
  // Add paragraph element with id 'count'
  $("body").append('<p id="count"></p>');
  // Add copyright paragraph element
  $("body").append("<p>Copyright - Holberton School</p>");

  // bind the debouncedUpdateCounter function to the button click event
  $("#start-btn").on("click", debouncedUpdateCounter);
});
