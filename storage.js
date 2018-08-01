class Store{
    constructor(){
        this.city = document.getElementById('city');
        this.defaultCity = 'baku'
    }
    getCity(){ return !localStorage.getItem('city') ? this.defaultCity : localStorage.getItem('city')}
    
    saveCity(city){
        localStorage.setItem('city',city);
    }
}