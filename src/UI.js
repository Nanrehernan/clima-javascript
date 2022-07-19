export class UI{
    constructor(){
        this.location = document.getElementById("weather-location")
        this.description = document.getElementById("weather-description")
        this.string = document.getElementById("weather-string")
        this.humidity = document.getElementById("weather-humidity")
        this.wind = document.getElementById("weather-wind")
    }

    render({name, country, temp, wind, description, humidity, temp_max, temp_min, icon}){
        this.location.textContent = `${name}, ${country}`
        this.description.textContent = `${description}`
        this.string.textContent = `${Math.round(temp)}°C`
        this.humidity.textContent = `Humedad: ${humidity} %`
        this.wind.textContent = `Viento: ${wind}m/s`
    }
}