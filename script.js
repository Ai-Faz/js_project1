    async function getWeather() {

    let city = document.getElementById("city").value.trim();

    if(city === ""){
    alert("Please enter a city name");
    return;
    }

    let apiKey = "4c98b3ea4bf9685118893e2945e2c3cb";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

    let response = await fetch(url);
    let data = await response.json();

    console.log(data);

    if(data.cod !== 200){
    alert(data.message);
    return;
    }

    document.getElementById("cityName").innerText = data.name;

    document.getElementById("temp").innerText =
    "🌡 Temperature: " + data.main.temp + " °C";

    document.getElementById("desc").innerText =
    "☁ Weather: " + data.weather[0].description;

    document.getElementById("humidity").innerText =
    "💧 Humidity: " + data.main.humidity + "%";

    document.getElementById("wind").innerText =
    "🌬 Wind Speed: " + data.wind.speed + " m/s";

    }

    catch(error){

    console.error(error);
    alert("Error fetching weather");

    }

    }