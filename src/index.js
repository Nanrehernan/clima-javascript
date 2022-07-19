require("bootstrap/dist/css/bootstrap.min.css")
require("./index.css")

const {Weather} = require("./Weather")
const {UI} = require("./UI")

const object = new Weather("Ciudad del Este")
const ui = new UI()

document.addEventListener("DOMContentLoaded", fetWeather)
document.getElementById("weather-form").addEventListener("submit", ChangeLocation)

async function fetWeather(){
    
    const data = await object.getWeather()
    const {name} = data
    const {temp, temp_max, temp_min, humidity} = data.main
    const {country} = data.sys
    const {speed} = data.wind
    const {description, icon} = data.weather[0]

    const weather = {
        name: name,
        country: country,
        temp: temp,
        temp_max: temp_max,
        temp_min: temp_min,
        wind: speed,
        description: description,
        humidity: humidity,
        icon: icon
    }

    ui.render(weather)
}

function ChangeLocation(e){
    e.preventDefault()
    const {value} = e.target.city
    object.changeLocation(value)
    fetWeather()
}