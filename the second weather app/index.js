const select = document.getElementById('selectCities');
const url = '';
const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const key = 'f778e5ddcced1ea7506849143d0d6c2b';
const day = new Date().getDay();

let params = new URLSearchParams({
    acces_key: 'f778e5ddcced1ea7506849143d0d6c2b',
    query: 'Minsk, Belarus',
    units: 'de'
});
let citiesList = getSelectCities();

function connect(lat, lot) {

    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lot}&exclude=hourly,minutely&appid=${key}`)
        .then(response => response.json())
        .then(json => console.log(json))

};

connect(53.89, 27.56);



/* const li = document.createElement("li");
li.classList.add("city");
const markup = `
    <h2 class="city_name" data_name="${nameOfCity},${sys.country}">
        <span>${nameOfCity}</span>
        <sup>${sys.country}</sup>
    </h2>
    <div class="city_temp">${Math.round(main.temp)}<sup>°C</sup></div>
    <figure>
        <img class="city_icon" src=${icon} alt=${weather[0]["main"]}>
        <figcaption>${weather[0]["description"]}</figcaption>
    </figure>
`;
li.innerHTML = markup;
list.appendChild(li);

msg.textContent = "";
form.reset();
input.focus();

// change icons


 // ensure that only a single request per city, per country will be executed
// 1
const listItems = list.querySelectorAl(".ajax_section .city");
const listItemsArray = Array.from(listItems);

if (listItemsItemsArray.length > 0) {
    // 2
    const filteredArray = listItemsArray.filter(el => {
        let content = " ";
        // athens, gr
        if (inputVal.includes(",")) {
            // athens, grrrrr-> invalid country code, so we keep only the first part of inputVal
            if (inputVal.split(",")[0]);
            content = el.querySelector(".city_name span").textContent.toLowerCase();
        } else {
            // athens
            content = el.querySelector(".city_name span").textContent.toLowerCase();
        }
        return content == inputVal.toLowerCase();
    });

    // 3
    if (filteredArray.length > 0) {
        msg.textContent = `Вы уже знаете погоду для ${
            filteredArray[0].querySelector(".city_name span").textContent
        } ...другие могут быть более otherwise be more specific by provining the country code as well `;
        form.reset();
        input.focus();
        //return filteredArray;
    }
} */

// select cities
function getSelectCities() {
    let citiesList = [];
    try {
        fetch(url)
            .then(response => response.json())
            .then(result => result.forEach(element => {
                element.regions.forEach(region => {
                    region.cities.forEach(city => {
                        citiesList.push(city);
                    })
                })
                citiesList.map(city => city.name).sort().forEach(name => {
                    const opt = document.createElement('option');
                    select.appendChild(opt);
                    opt.innerHTML = name;
                })
            }));
        return citiesList;
    } catch (error) {
        console.log('Ошибка:', error)
    }
}

// get the weather
function getWeather() {
    try {
        select.addEventListener('change', () => {
            citiesList.forEach(city => {
                if (city.name === select.value) {
                    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lot}&exclude=hourly,minutely&appid=${key}`)
                        .then(response => response.json())
                        .then(result => {
                            displayWeatherOnFiveDays(result)
                        })
                }
            })
        })
    } catch (error) {
        console.error("Ошибка", error);
    }
}

function displayWeatherOnFiveDays(result) {
    document.getElementById("weather-forecast").hidden = false;

    document.querySelectorAll('#dayWeek').forEach((elem, index) => {
        const currentDay = (day + index) > 6 ? (day + index - 7) : (day + index);
        elem.innerHTML = `${days[currentDay]}`;
    })
    document.querySelectorAll('#temperatureDay').forEach((elem, index) => {
        elem.innerHTML = `Температура воздуха : ${Math.ceil(result.daily[index].temp.day - temperatureKelvin)} °С`
    })
    document.querySelectorAll('#humidityDay').forEach((elem, index) => {
        elem.innerHTML = `Влажность : ${result.daily[index].humidity} %`;
    })
    document.querySelectorAll('#windDay').forEach((elem, index) => {
        elem.innerHTML = `Скорость ветра : ${Math.ceil(result.daily[index].wind_speed)} м/с`;
    })
    document.querySelectorAll('imgWeatherDay').forEach((elem, index) => {
        setAttribute('src', `http://openweathermap.org/img/wn/${elem.result.daily[index].weather[0].icon}@2x.png`);
    })
}

icon = `icons/01d.svg {
    weather[0]["icon];
}@2x.png`;

icon = `icon/binocular.png {
    weather[0]["icon"]
}.svg`;
getWeather();