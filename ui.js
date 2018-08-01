class UI{
    constructor(){
        this.location = document.getElementById('w-location')
        this.desc = document.getElementById('w-desc')
        this.string = document.getElementById('w-string')
        this.details = document.getElementById('w-details')
        this.icon = document.getElementById('w-icon')
    }

    paint(data){
        this.location.textContent = data.location.name
        this.desc.textContent = data.current.condition.text
        this.icon.setAttribute('src',`${data.current.condition.icon}`)
        this.string.innerHTML = `${data.current.temp_c} &#8451`
        console.log(data)
    }
    convertTemp(temp){
        return {
            min: temp === 'C' ? temp.Minimum.Value : ((temp.Minimum.Value - 32)*5/9).toFixed(1),
            max: temp.Maximum.Unit === 'C' ? temp.Maximum.Value : ((temp.Maximum.Value - 32)*5/9).toFixed(1)
        }
    }
    getTime(riseOrSet,epochTime){
        const today  = new Date(epochTime * 1000)
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();
        const ampm = hours > 12 ? 'pm' : 'am'    
        hours %= 12;
        return `${riseOrSet} ${hours}:${minutes} ${ampm}`
    }
    convertWindSpeed(speed){
        return speed*3600/1000
    }
    paint5Days(data,day){  
        return (
            `
                <ul class="list-group mt-3" id="w-details">
                    <li class="list-group-item" id="w-temp">${data.forecast.forecastday[day].day.avgtemp_c} <img class="pt-0" src='${data.forecast.forecastday[day].day.condition.icon}'></li>
                    <li class="list-group-item" id="w-windSpeed">${data.forecast.forecastday[day].day.maxwind_kph} km/h</li>
                    <li class="list-group-item" id="w-humidity">${data.forecast.forecastday[day].day.avghumidity}%</li>
                    <li class="list-group-item" id="w-sunSetRise">Sun Set: ${data.forecast.forecastday[day].astro.sunrise} / Sun Rise: ${data.forecast.forecastday[day].astro.sunset}</li>
                </ul>
             `
        )
    }
}