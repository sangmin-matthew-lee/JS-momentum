const weather = document.querySelector(".js-weather");

const API_KEY = "1df503c9d7ecb6ca31c511ac381b7472";
const COORDS = `coords`;

function getWeather(lat,lon){
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        ).then(function(responese){
            return responese.json();
        }).then(function(json){
            console.log(json);
            const temp = json.main.temp;
            const place = json.name;
            weather.innerText = `${temp}°C at ${place}`;
        })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };

    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError()
{
    console.log(`Can't access geo location`); 
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
    
}

function loadCoords()
{
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null)
    {
        askForCoords();
    }else{
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}



function init(){
    loadCoords();
}
init();