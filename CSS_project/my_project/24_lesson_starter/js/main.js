const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datatime", thisYear);
year.textContent = thisYear;
