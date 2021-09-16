function formatDate(now) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
}

let currentdate = new Date();
let datetime =
  "Last Sync: " +
  currentdate.getDay() +
  "/" +
  currentdate.getMonth(months) +
  "/" +
  currentdate.getHours() +
  ":" +
  currentdate.getMinutes();

let formatDate = `Today is ${nowDay}, ${nowMonth} ${nowDate}, ${nowYear}`;
return formatDate;



/////
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-search");

  console.log(searchInput.value);
  let h2 = document.querySelector("h2");

  if (searchInput.value) {
    h2.innerHTML = `${searchInput.value}...`;
  } else {
    h2.innerHTML = Neverland;
    alert("Don't forget a cityname");
  }
}

let city = document.querySelector("#city-search");
city.addEventListener("submit", search);


let city = prompt("Enter your city");
city = city.toLowerCase();
if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;
  let celciusTemperature = Math.round(temperature);
  let farenheitTemperature = Math.round((temperature * 9) / 5 + 32);

  alert(
    `It is currently ${celciusTemperature}°C (${farenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry, we don't have weather for this city, try Googling it https://google.com/search?q=weather+${city} `
  );
}