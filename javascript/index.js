let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 40,
  },
  barcelona: {
    temp: 28,
    humidity: 50,
  },
};


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

  let months = [
    "Jan",
    "Feb",
    "Mar",
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
  //let nowYear = now.getFullYear();
  let nowDay = days[now.getDay()];
  let nowMonth = months[now.getMonth()];
  let nowHours = now.getHours();
  let nowMinutes = now.getMinutes();
  let formatDate = `${nowDay}, ${nowHours}:${nowMinutes}`;
  return formatDate;
}

nowlocaltime.innerHTML = formatDate(now);
//alert(formatDate(now));

//searchbar

function showTemperature (response) {
  console.log (response);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("h1");
  temperatureElement.innerHTML = `${temperature} °C`;
  h2.innerHTML = `in ${response.data.name}`;
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



