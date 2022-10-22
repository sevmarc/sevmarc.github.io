const raw_config = {
    'a2V5': 'MTAzMWM0ZGNkMDYxNjMzZTNiMzc5MDZlMDQwZGU0ODc=',
    'bGF0MA==': 'NDcuNDEyNQ==',
    'bG9uMA==': 'MTguOTI5Nw==',
    'bmFtZWxpc3Q=': 'TcOhcnRvbiwgR2FicmllbGxhLCBUYW3DoXMsIETDqW5lcywgWnPDs2ZpYSwgVmVyb25pa2EsIE3DoXJ0YSwgTsOzcmEsIETDoW5pZWwsIEVzenRlcg==',
}

const debug = false

const config = {}

for (const [key, value] of Object.entries(raw_config)) {
    config[atob(key)] = atob(value)
}

if (debug) { // print decoded key - value pairs
    for (const [key, value] of Object.entries(config)) {
        console.log(key, value);
    }
}

config['namelist'] = [
    'Márton',
    'Gabriella',
    'Tamás',
    'Dénes',
    'Zsófia',
    'Veronika',
    'Márta',
    'Nóra',
    'Dániel',
    'Eszter',
];