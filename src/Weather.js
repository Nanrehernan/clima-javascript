const API_KEY = require("../apikey")

export class Weather{
    constructor(city){
        this.city = city
    }

    async getWeather(){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${API_KEY.default}&units=metric&lang=es`
        const response = await fetch(url)
        const data = await response.json()
        return data
    }

    changeLocation(city){
        this.city = city
    }
}