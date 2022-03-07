var key = config.key


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
            console.log(data);
            drawWeatherAll(data); // Call drawWeather
        })
        .catch(function() {
            // catch any errors
            console.log('Some problem happened with the OpenWeather API call! ')
        });
}


function drawWeather(d) {
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    var description = d.weather[0].description;

    document.getElementById('description').innerHTML = description;
    document.getElementById('temp').innerHTML = celcius + '&deg;';
    document.getElementById('location').innerHTML = d.name;

    if (description.indexOf('rain') > 0) {
        document.body.className = 'rainy';
    } else if (description.indexOf('cloud') > 0) {
        document.body.className = 'cloudy';
    } else if (description.indexOf('sunny') > 0) {
        document.body.className = 'sunny';
    }
}


function drawWeatherAll(d) {
    var celcius = Math.round(parseFloat(d.current.temp) - 273.15);
    var description = d.current.weather[0].description;

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


window.onload = function() {
    // weatherAllByCoords(config.lat0, config.lon0)
    weatherBalloonByCoords(config.lat0, config.lon0)
}