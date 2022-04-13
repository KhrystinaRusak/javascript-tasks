let params = new URLSearchParams({
    acces_key: '6e8682a23c4208b7691944100eb07b46',
    query: 'Minsk, Belarus',
    units: 'm'
});

fetch(`http://api.openweatherstack.com/current?${}`)
    .then(res => res.json(resource[, init]))
    .then(console.log);

// current wheater

/* {
    "request": {
        "type": "Minsk",
        "query": "Minsk, Belarus",
        "language": "en",
        "unit": "m"
    },
    "location": {
        "name": "Minsk",
        "country": "Belarus",
        "region": "Minsk",
        "lat": "40.714",
        "lon": "-74.006",
        "timezone_id": "America/New_York",
        "localtime": "2019-09-08 09:36",
        "localtime_epoch": 1567935360,
        "utc_offset": "-4.0"
    },
    "current": {
        "observation_time": "01:36 PM",
        "temparature": 18,
        "weather_code": 113,
        "weather_icons": [
            "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
        ],
        "weather_descriptions": [
            "Sunny"
        ],
        "wind_speed": 7,
        "wind_degree": 270,
        "wind_dir": "W",
        "pressure": 1018,
        "precip": 0,
        "humidity": 70,
        "cloudcover": 0,
        "feelslike": 18,
        "uv_index": 5,
        "visibility": 16
    },
    "historical": {
        "2013-07-01": {
            "date": "2013-07-01",
            "date_epoch": 1372636800,
            "astro": {
                "sunrise": "05:29 AM",
                "sunset": "08:31 PM",
                "moonrise": "12:59 AM",
                "moonset": "02:42 PM",
                "moon_phase": "Last Quarter",
                "moon_illumination": 40
            },
            "mintemp": 21,
            "maxtemp": 25,
            "avgtemp": 22,
            "totalsnow": 0,
            "sunhour": 12.5,
            "uv_index": 5
        }
    }
} */

const li = document.createElement("li");
li.classList.add("city");
const markup = `
    <h2 class="city_name" data_name="${name},${sys.country}">
        <span>${name}</span>
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
icon = `icons/01d.svg {
    weather[0]["icon];
}@2x.png`;

icon = `icon/binocular.png {
    weather[0]["icon"]
}.svg`;

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
        msg.textContent = `You already know the weather for ${
            filteredArray[0].querySelector(".city_name span").textContent
        } ...otherwise be more specific by provining the country code as well `;
        form.reset();
        input.focus();
        //return filteredArray;
    }
}