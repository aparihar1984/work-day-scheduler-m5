// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Using day.js to display the current date on the webpage.
var currentDate = dayjs();
$('#currentDay').text(currentDate.format('MMM D, YYYY, h:mm:ss a'));

// Using moment.js to display the current date on the webpage.
// $(document).ready(function () {
  // Linking "#currentDay" between the HTML and CSS pages to display the day and time
  // $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

// Assigning the saveBtn (save buttons) click listener for the user input(s) and time stamp.
$(".saveBtn").on("click", function () {
console.log(this);
// Using jQuery $(this) to call the function and pass "this" to it
var eventText = $(this).siblings(".description").val();
var eventTime = $(this).parent().attr("id");
// Setting the value(s) in a local storage using setItem.
localStorage.setItem(eventTime, eventText);
})

// Loading saved data from LocalStorage for every hour created.
$("#hour9 .description").val(localStorage.getItem("hour-9"));
$("#hour10 .description").val(localStorage.getItem("hour-10"));
$("#hour11 .description").val(localStorage.getItem("hour-11"));
$("#hour12 .description").val(localStorage.getItem("hour-12"));
$("#hour13 .description").val(localStorage.getItem("hour-13"));
$("#hour14 .description").val(localStorage.getItem("hour-14"));
$("#hour15 .description").val(localStorage.getItem("hour-15"));
$("#hour16 .description").val(localStorage.getItem("hour-16"));
$("#hour17 .description").val(localStorage.getItem("hour-17"));

// $(function() {

function hourTracker() {
  // Obtaining the number of hours that have passed during the day using moment.js.
  var currentHour = moment().hour();

  // Looping over time blocks
  $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
      console.log( timeBlock, currentHour)

      // Using If-Else statements to check whether the current time (currentHour) has passed the various "time blocks" (timeBlock)
      if (timeBlock < currentHour) {
          $(this).addClass("past");
          $(this).removeClass("future");
          $(this).removeClass("present");
      }
      else if (timeBlock === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
          $(this).removeClass("future");
      }
      else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
      }
  })
}
hourTracker();
// })

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
// });