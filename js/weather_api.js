const key = config.key;


function weatherBalloonByCoords(lat, lon) {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + key)
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
            drawWeather(data); // Call drawWeather
        })
        .catch(function() {
            // catch any errors
            console.log('Some problem happened with the OpenWeather API call! ')
        });
}

function weatherAllByCoords(lat, lon) {
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=' + key)
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
            drawWeatherAll(data); // Call drawWeather
        })
        .catch(function() {
            // catch any errors
            console.log('Some problem happened with the OpenWeather API call! ')
        });
}


function drawWeather(d) {
    const celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    const feelslike = Math.round(parseFloat(d.main.feels_like) - 273.15);
    const description = d.weather[0].description;

    document.getElementById('description').innerHTML = description;
    document.getElementById('temp').innerHTML = celcius + '&deg;' + ' (' + feelslike + '&deg;)';
    document.getElementById('location').innerHTML = d.name;

    const sunrise = prettyDate(d.sys.sunrise * 1000);
    const sunset = prettyDate(d.sys.sunset * 1000);
    document.getElementById('sunrise').innerHTML = sunrise.toLocaleString();
    document.getElementById('sunset').innerHTML = sunset.toLocaleString();

    if (description.indexOf('rain') > 0) {
        document.body.className = 'rainy';
    } else if (description.indexOf('cloud') > 0) {
        document.body.className = 'cloudy';
    } else if (description.indexOf('sunny') > 0) {
        document.body.className = 'sunny';
    }
}


function prettyDate(time) {
    const date = new Date(parseInt(time));
    return date.toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit'
    });
}


function drawWeatherAll(d) {
    const celcius = Math.round(parseFloat(d.current.temp) - 273.15);
    const description = d.current.weather[0].description;

    document.getElementById('description').innerHTML = description;
    document.getElementById('temp').innerHTML = celcius + '&deg;';
    document.getElementById('location').innerHTML = d.lat + ', ' + d.lon;


    if (description.indexOf('rain') > 0) {
        document.body.className = 'rainy';
    } else if (description.indexOf('cloud') > 0) {
        document.body.className = 'cloudy';
    } else if (description.indexOf('sunny') > 0) {
        document.body.className = 'sunny';
    }
}