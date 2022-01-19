let now = new Date();
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

  let nowDay = days[now.getDay()];
  let nowHours = now.getHours();
  let nowMinutes = now.getMinutes();
  let formatDate = `${nowDay}, ${nowHours}:${nowMinutes}`;
  return formatDate;
}

nowlocaltime.innerHTML = formatDate(now);
let dateWithouthSecond = new Date();
dateWithouthSecond.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});

//alert(formatDate(now));

//searchbar

function showTemperature (response) {
  console.log (response);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("h1");
  temperatureElement.innerHTML = `${temperature} °C`;
  h2.innerHTML = `in ${response.data.name}`;
  let iconElement = document.querySelector ("#icon1");
  iconElement.setAttribute ("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  let currentStatus = document.querySelector ("#status");
  currentStatus.innerHTML = `${response.data.weather[0].description}`;
  let humid = document.querySelector ("#humidity");
  humid.innerHTML = `Humidity: ${response.data.main.humidity} %`;
  let wind = document.querySelector ("#wind");
  wind.innerHTML = `Wind: ${response.data.wind.speed} m/s`;



}

function find(event) {
  event.preventDefault();
  let apiKey= "d8f52daba653e4c8756beaa32c6a539e";
  let city = document.querySelector("#city-search").value;
  let units = "metric";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  h2.innerHTML = `in  ${city}`;
  
  let apiUrl = `${apiEndpoint}?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get (`${apiUrl}`).then(showTemperature);

}

let citySearch = document.querySelector("#city-form");
citySearch.addEventListener("submit", find);


function showLocation (position) {
//alert (`I know where you are! Coordinates: ${position.coords.latitude} and ${position.coords.longitude}`);
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey= "d8f52daba653e4c8756beaa32c6a539e";
  let units = "metric";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
  axios.get (`${apiUrl}`).then(showTemperature);
}

function getCurrentPosition (){
 navigator.geolocation.getCurrentPosition(showLocation);
}

let buttonGeoLocation = document.querySelector("#my-location");
buttonGeoLocation.addEventListener("click", getCurrentPosition);

//let city = document.querySelector("#city-search");
let h2 = document.querySelector("h2");



