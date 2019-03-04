var myModule = (function() {
    const API_KEY = "c53342f7227b785e33d437ffca1ed448";
    const URL_ROOT = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;
    const unit = "metric";
    const tempElem = document.getElementsByClassName("temp")[0];

    function init() {
        const elem = document.getElementsByTagName("form")[0];
        elem.addEventListener("submit", function(e) {
        e.preventDefault();
        showLoading();
        const val = document.getElementsByTagName("input")[0].value;
        getWeather(val);
        });
    }

    function getWeather() {
        let city = document.querySelector('#city').value;
        fetch(`${URL_ROOT}&q=${city}&units=${unit}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(resJson){
               tempElem.innerText = resJson.main.temp + 'ºC';
            })
            .catch(function(error) {
                tempElem.innerText = 'Parámetro introducido incorrecto';
            })
    }

    function showLoading(){
        tempElem.innerText = 'Loading...';
    }

    init();
})();