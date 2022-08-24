//current date display
var dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//hours in scheduler
var hoursArray = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
var container = document.querySelector(".container");

for (var i = 0; i < hoursArray.length; i++) {
  var timeBlock = document.createElement("section");
  timeBlock.classList.add("time-block", "row");
  timeBlock.innerHTML = `<div class="col-md-1 hour">${getHours(
    hoursArray[i]
  )}</div>
    <textarea class="col-md-10 description"></textarea>
    <button class="col-md-1 saveBtn btn"><i class="fa-solid fa-floppy-disk"></i></button>`;
  container.append(timeBlock);
}

function getHours(hours) {
  switch (hours) {
    case "09":
      return "9 AM";

    case "10":
      return "10 AM";

    case "11":
      return "11 AM";

    case "12":
      return "12 PM";

    case "13":
      return "1 PM";

    case "14":
      return "2 PM";

    case "15":
      return "3 PM";

    case "16":
      return "4 PM";

    case "17":
      return "5 PM";
  }
}

//current date display at top of page
var currentDate = document.querySelector("#currentDay");

//text area in scheduler

//time blocks

//saving scheduled timeblocks

//localstorage
