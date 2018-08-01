class Weather{
    constructor(city){
        this.city = city
        this.key = '3474e7402d8183780e55df52a85c920d'
    }
    async getWeather(){
        const response = await fetch(`http://api.apixu.com/v1/forecast.json?key=fe264698e50c40078aa82829180106&q=${this.city}&days=5`)
        return await response.json();
    }
    changeLocation(city){
        this.city = city;
    }
}