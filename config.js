var raw_config = {
    'a2V5': 'MTAzMWM0ZGNkMDYxNjMzZTNiMzc5MDZlMDQwZGU0ODc=',
    'bGF0MA==': 'NDcuMzQ0MQ==',
    'bG9uMA==': 'MTguNzQ4Mw==',
}

var debug = false

var config = {}

for (const [key, value] of Object.entries(raw_config)) {
    config[atob(key)] = atob(value)
}

if (debug) { // print decoded key - value pairs
    for (const [key, value] of Object.entries(config)) {
        console.log(key, value);
    }
}