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
        $.ajax((`${URL_ROOT}&q=${city}&units=${unit}`), {
            type: 'GET',
            success: function(response) {
                tempElem.innerText = response.main.temp;
            },
            error: function(error) {
                tempElem.innerText = 'El parámetro introducido no es correcto';
            }
        })
    }

    function showLoading(){
        $('.temp').css('visibility', 'visible');
    }

    init();
})();