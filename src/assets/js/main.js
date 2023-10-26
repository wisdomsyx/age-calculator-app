"use strict";
// day of birth, month, and year labels
const dayText = document.querySelector("#day-text");
const monthText = document.querySelector("#month-text");
const yearText = document.querySelector("#year-text");

// DOM input fields
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const day = document.querySelector("#day");

// validation blocks.
let dayValidation = document.querySelector("#day-validation");
let monthValidation = document.querySelector("#month-validation");
let yearValidation = document.querySelector("#year-validation");

// image element listening for a click
const imageButton = document.querySelector("#image-button");

const displayYears = document.querySelector("#display-years");
const displayMonths = document.querySelector("#display-months");
const displayDays = document.querySelector("#display-days");

const calculateDate = () => {
  // getting user inputed year of birth
  const yearsValue = year.value;
  let yearOfBirth = yearsValue;

  // getting current year.
  const currentYear = new Date().getFullYear();

  // this line calculates the user's age.
  const userAge = currentYear - yearOfBirth;

  // calculating total months lived.
  let currentMonth = new Date().getMonth() + 1;
  const totalMonths = userAge * 12 + currentMonth;

  // calculating total days lived considering leap years.
  /* a while...loop for increamenting age by 1 while age is less than current year.
	and determining if year a certain year was a leap year to know the number of days in it */
  let numberOfDaysLived = 0;
  while (yearOfBirth < currentYear) {
    (yearOfBirth % 4 === 0 && yearOfBirth % 400 === 0) ||
    yearOfBirth % 100 !== 0
      ? (numberOfDaysLived += 366)
      : (numberOfDaysLived += 365);
    yearOfBirth++;
  }

  // making year, month, and day data visibile in the DOM.
  displayYears.textContent = userAge;

  displayMonths.textContent = totalMonths;

  displayDays.textContent = numberOfDaysLived;
};

// FORM VALIDATON PROMPTS
const formValidation = () => {
  switch (true) {
    //when all fields are empty.
    case day.value === "" && month.value === "" && year.value === "":
      dayValidation.textContent = "This field is required";
      monthValidation.textContent = "This field is required";
      yearValidation.textContent = "This field is required";
      dayText.style.color = "hsl(0, 100%, 67%)";
      monthText.style.color = "hsl(0, 100%, 67%)";
      yearText.style.color = "hsl(0, 100%, 67%)";
      day.style.borderColor = "hsl(0, 100%, 67%)";
      month.style.borderColor = "hsl(0, 100%, 67%)";
      year.style.borderColor = "hsl(0, 100%, 67%)";
      break;

    //when day input field is empty.
    case day.value === "" && month.value === " " && year.value === " ":
      dayValidation.textContent = "This field is required";
      day.style.borderColor = "hsl(0, 100%, 67%)";
      break;

    //when month input field is empty.
    case day.value === " " && month.value === "" && year.value === " ":
      monthValidation.textContent = "This field is required";
      monthText.style.borderColor = "hsl(0, 100%, 67%)";
      break;

    // when year input field is empty.
    case day.value === " " && month.value === " " && year.value === "":
      yearValidation.textContent = "This field is required";
      yearText.style.borderColor = "hsl(0, 100%, 67%)";
      break;

    // combining two sceneros.
    // when day and month input field are empty
    case day.value === "" && month.value === "":
      dayValidation.textContent = "This field is required";
      monthValidation.textContent = "This field is required";
      day.style.borderColor = "hsl(0, 100%, 67%)";
      month.style.borderColor = "hsl(0, 100%, 67%)";
      break;

    // when day and year input field are empty
    case day.value === "" && year.value === "":
      dayValidation.textContent = "This field is required";
      yearValidation.textContent = "This field is required";
      day.style.borderColor = "hsl(0, 100%, 67%)";
      year.style.borderColor = "hsl(0, 100%, 67%)";
      break;

    // when month and year input field are empty.
    case month.value === "" && year.value === "":
      monthValidation.textContent = "This field is required";
      yearValidation.textContent = "This filed is required";
      month.style.borderColor = "hsl(0, 100%, 67%)";
      year.style.borderColor = "hsl(0, 100%, 67%)";
      break;

    //when day, month, and year value are all invalid
    case day.value > 31 &&
      month.value > 12 &&
      year.value > new Date().getFullYear():
      dayValidation.textContent = "Invalid Day!";
      monthValidation.textContent = "Invalid Month!";
      yearValidation.textContent = "Invalid Year!";
      day.style.borderColor = "hsl(0, 100%, 67%)";
      month.style.borderColor = "hsl(0, 100%, 67%)";
      year.style.borderColor = "hsl(0, 100%, 67%)";
      break;
    //when an invalid day value is inputed
    case day.value > 31 &&
      month.value <= 12 &&
      year.value <= new Date().getFullYear():
      dayValidation.textContent = "Invalid Day!";
      day.style.borderColor = "hsl(0, 100%, 67%)";
      displayDays.textContent = "__";
      displayMonths.textContent = "__";
      displayYears.textContent = "__";
      break;
    //when an invalid month value is inputed
    case month.value > 12 &&
      day.value <= 31 &&
      year.value <= new Date().getFullYear():
      monthValidation.textContent = "Invalid Month!";
      month.style.borderColor = "hsl(0, 100%, 67%)";
      displayDays.textContent = "__";
      displayMonths.textContent = "__";
      displayYears.textContent = "__";

      break;
    //when an invalid year value is inputed
    case year.value > new Date().getFullYear() &&
      day.value <= 31 &&
      month.value <= 12:
      yearValidation.textContent = "Invalid Year!";
      year.style.borderColor = "hsl(0, 100%, 67%)";
      displayDays.textContent = "__";
      displayMonths.textContent = "__";
      displayYears.textContent = "__";
      break;
    default:
      calculateDate();
  }
};

const eventFunction = () => {
  // changes the input fields colors on focus.
  day.addEventListener("focus", () => {
    dayValidation.textContent = null;
    dayText.style.color = "hsl(259, 100%, 65%)";
    day.style.borderColor = "hsl(259, 100%, 65%)";
  });

  month.addEventListener("focus", () => {
    monthValidation.textContent = null;
    monthText.style.color = "hsl(259, 100%, 65%)";
    month.style.borderColor = "hsl(259, 100%, 65%)";
  });

  year.addEventListener("focus", () => {
    yearValidation.textContent = null;
    yearText.style.color = "hsl(259, 100%, 65%)";
    year.style.borderColor = "hsl(259, 100%, 65%)";
  });

  //image button listening for click
  imageButton.addEventListener("click", () => formValidation());

  // clearing the input fields on window reload.
  window.addEventListener("unload", () => {
    day.value = "";
    month.value = "";
    year.value = "";
  });

  // adding an event listener on the enter key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      formValidation();
    }
  });
};
eventFunction();
