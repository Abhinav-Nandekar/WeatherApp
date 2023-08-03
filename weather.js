const api_key = "a6f716fa36187f52b5bf40fd69881d6e";
const wetIcon = document.querySelector("#icon");

const searchTemp = () =>{
    const city = document.getElementById("cityname").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => showWeather(data));
}

const showWeather = weather => {
    console.log(weather);

    document.getElementById("city").innerHTML = weather.name +" "+ weather.sys.country;
    document.getElementById("temp").innerHTML = weather.main.temp + "°C" ;
    document.getElementById("mausam").innerHTML = weather.weather[0].main ;
    document.getElementById("humidity").innerHTML = weather.main.humidity + "%";
    document.getElementById("wind").innerHTML = weather.wind.speed + " km/hr" ;
    document.getElementById("minTemp").innerHTML = weather.main.temp_min + "°C";
    document.getElementById("maxTemp").innerHTML = weather.main.temp_max + "°C";

    if(weather.weather[0].main == "Clouds"){
        wetIcon.src = "images/clouds.png";
    }
    else if(weather.weather[0].main == "Clear"){
        wetIcon.src = "images/clear.png";
    }
    else if(weather.weather[0].main == "Rain"){
        wetIcon.src = "images/rain.png";
    }
    else if(weather.weather[0].main == "Drizzle"){
        wetIcon.src = "images/drizzle.png";
    }
    else if(weather.weather[0].main == "Haze"){
        wetIcon.src = "images/mist.png";
    }
    else if(weather.weather[0].main == "Snow"){
        wetIcon.src = "images/snow.png";
    }
}