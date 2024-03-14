/* fecha actual */
let fecha = new Date();
let currentYear = fecha.getFullYear();
let currentMonth = fecha.getMonth() + 1;
let currentDay = fecha.getDate();
/* elementos */
let button = document.querySelector(".button");
let years, months, days;
let spanYears = document.querySelector(".spanYears");
let spanMonths = document.querySelector(".spanMonths");
let spanDays = document.querySelector(".spanDays");
const errorDay = document.querySelector(".error-day");
const errorMonth = document.querySelector(".error-month");
const dayTitle = document.querySelector(".day-title");
const monthTitle = document.querySelector(".month-title");

button.addEventListener("click", function () {
  /* Valores de Inputs */
  let inputDay = document.getElementById("input-day").value;
  let inputMonth = document.getElementById("input-month").value;
  let inputYear = document.getElementById("input-year").value;

  /* Operaciones  de año actual menos año introducido*/
  years = currentYear - inputYear;
  months = currentMonth - inputMonth;
  days = currentDay - inputDay;

  /* Valida que sean valores validos */
  if (
    (inputDay > currentDay || isNaN(inputDay)) &&
    inputYear >= currentYear &&
    inputMonth >= currentMonth
  ) {
    errorDay.style.display = "block";
    dayTitle.style.color = "hsl(0, 100%, 67%)";
    document.querySelector("#input-day").style.border =
      "1px solid hsl(0, 100%, 67%)";
    if (innerWidth >= 800) {
      button.style.top = "180px";
    } else if (innerWidth < 800 && innerHeight > 844) {
      button.style.top = String(100 + innerHeight / 20) + "px";
    } else {
      button.style.top = String(100 + innerHeight / 8) + "px";
    }
  }
  if (
    (inputMonth > currentMonth || isNaN(inputMonth)) &&
    inputYear >= currentYear
  ) {
    errorMonth.style.display = "block";
    monthTitle.style.color = "hsl(0, 100%, 67%)";
    document.querySelector("#input-month").style.border =
      "1px solid hsl(0, 100%, 67%)";
    if (innerWidth >= 800) {
      button.style.top = "180px";
    } else if (innerWidth < 800 && innerHeight > 844) {
      button.style.top = String(100 + innerHeight / 20) + "px";
    } else {
      button.style.top = String(100 + innerHeight / 8) + "px";
    }
  }

  /* Calcula la edad */
  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months = 12 + currentMonth - inputMonth;
  }
  if (days < 0) {
    let ultimoDiaMesAnterior = new Date(
      currentYear,
      currentMonth - 1,
      0
    ).getDate();
    days = ultimoDiaMesAnterior + days;
    months--;
  }
  /* valida el output final */
  if (years >= 0) {
    spanYears.innerText = years;
    spanMonths.innerText = months;
    spanDays.innerText = days;
  }
});
