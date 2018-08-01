const storage = new Store()
let myCity = storage.getCity();
const weather = new Weather(myCity);
const ui = new UI();


const getWeather = ()=>{
    weather.getWeather()
    .then(data =>{
        ui.paint(data)
    }).catch(err=>{

    })
}

document.addEventListener('DOMContentLoaded',getWeather)

document.getElementById('w-change').addEventListener('click',()=>{
    const city = document.getElementById('city').value;
    
    // change location
    weather.changeLocation(city);

    // save city to local Storage
    storage.saveCity(city)

    // get and display weather
    getWeather();
    createDays();
    // close modal
    $('#locModal').modal('hide');
})

const createDays = ()=>{
    const days = document.querySelectorAll('.days');
    const daysTab = document.querySelectorAll('.daysTab');
    for(let i = 0; i < 5; i++){
        weather.getWeather().then(data=>{
            daysTab[i].innerHTML = `${getMonth(data.forecast.forecastday[i].date)} ${new Date( data.forecast.forecastday[i].date).getDate()}`
            days[i].innerHTML = `${ui.paint5Days(data,i)}`
        })
    }
}

function getMonth(date){
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    const d = new Date(date);
    return monthNames[d.getMonth()];
}

createDays();