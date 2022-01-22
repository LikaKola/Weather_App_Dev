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
  if (nowHours < 10) {
    nowHours = `0${nowHours}`;
  }
  let nowMinutes = now.getMinutes();
  if (nowMinutes < 10) {
    nowMinutes = `0${nowMinutes}`;
  }

let formatDate = `${nowDay}, ${nowHours}:${nowMinutes}`;
return formatDate;
}

nowlocaltime.innerHTML = formatDate(now);

//Second screen displaying 4 day forecast 

function formatDay(timestamp){
  let date = new Date(timestamp*1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
  return days [day];
}

function displayForecast(response) {
let forecast = response.data.daily;
let forecastElement = document.querySelector ("#forecast");
let forecastHTML = `<div class="row">`;
  forecast.forEach(function(forecastDay, index) { 
    if (index<6) {
    forecastHTML +=  // forecastHTML + 
    `   <div class="col-2">
      <img src="https://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png" class="card-img-top" alt="icon1" id="weather-icon" />
     <div class="card-body">
      <h5 class="card-title">${formatDay(forecastDay.dt)}</h5>
      <p class="card-text">
       <span class = "weather-forecast-max"> ${Math.round(forecastDay.temp.max)} °</span> </br>
       <span class = "weather-forecast-min"> ${Math.round(forecastDay.temp.min)} ° </span>
      </p>
     </div>
   </div>
    `;
  }
  });

forecastHTML= forecastHTML + `</div>`;
forecastElement.innerHTML = forecastHTML; 

}

function getForecast (coordinates){ 
let apiKey= "d8f52daba653e4c8756beaa32c6a539e";
let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
axios.get (apiUrl).then(displayForecast);
}

//Top  screen with current city and current weather

function showTemperature (response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("h1");
  temperatureElement.innerHTML = `${temperature} °C`;
  h2.innerHTML = `in ${response.data.name}`;
  let iconElement = document.querySelector ("#icon1");
  iconElement.setAttribute ("src",`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  let currentStatus = document.querySelector ("#status");
  currentStatus.innerHTML = `${response.data.weather[0].description}`;
  let humid = document.querySelector ("#humidity");
  humid.innerHTML = `Humidity: ${response.data.main.humidity} %`;
  let wind = document.querySelector ("#wind");
  wind.innerHTML = `Wind: ${response.data.wind.speed} m/s`;
getForecast(response.data.coord);
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
let h2 = document.querySelector("h2");

window.onload = function() {
  getCurrentPosition();
 };

