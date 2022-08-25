//current date display
var currentDate = document.querySelector("#currentDay");
var currentHour = new Date().getHours();

currentDate.textContent = new Date().toLocaleString("en-US", {
  weekday: "long",
  day: "numeric",
  month: "long",
});

//hours in scheduler
var hoursArray = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
var container = document.querySelector(".container");

for (var i = 0; i < hoursArray.length; i++) {
  var timeBlock = document.createElement("section");
  timeBlock.classList.add("time-block", "row");
  timeBlock.innerHTML = `<div class="col-md-1 hour">${getHours(
    hoursArray[i]
  )}</div>
    <textarea class="col-md-10 description ${getClass(hoursArray[i])}">${
    localStorage.getItem(hoursArray[i]) || ""
  }</textarea>
    <button class="col-md-1 saveBtn btn" id="${
      hoursArray[i]
    }"><i class="fa-solid fa-floppy-disk"></i></button>`;
  container.append(timeBlock);
}

var buttonsArray = document.querySelectorAll(".saveBtn");

buttonsArray.forEach((button) => {
  button.addEventListener("click", (e) => {
    localStorage.setItem(
      e.currentTarget.id,
      e.currentTarget.previousElementSibling.value
    );
  });
});

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

function getClass(hour) {
  if (hour < currentHour) {
    return "past";
  } else if (hour == currentHour) {
    return "present";
  } else {
    return "future";
  }
}

//saving scheduled timeblocks

//localstorage
