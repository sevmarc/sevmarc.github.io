window.onload = function() {
    let name_closest_day_dict = {};

    let counter = 0;
    config.namelist.forEach(item => {
        if (debug) { console.log(`name: ${item}`) }

        fetch(`https://api.nevnapok.eu/nev/${item}`)
            .then((response) => response.json())
            .then((data) => {
                counter += 1;
                const formatted_date_list = data[item].map(x => format_spec_str_to_upcoming_date(x));
                name_closest_day_dict[get_closest_upcoming_date(formatted_date_list)] = item;

                if (counter >= config.namelist.length) {
                    // find closest date in name_closest_day_dict values
                    // find corresponding key
                    // update div with result

                    const date_values = Object.keys(name_closest_day_dict);
                    const target_nameday = get_closest_upcoming_date(date_values);
                    const closest_name = name_closest_day_dict[target_nameday];

                    console.log(`RESULT: ${target_nameday}, ${closest_name}`)
                    let nameday_result = "Upcoming nameday: " + `${closest_name}: ${format_date_str(target_nameday)}`;
                    document.getElementById('closest nameday').innerHTML = nameday_result;
                }
            })
            .catch((error) => {
                console.error(`Problem with reading nameday data:${item}`, error)
            })
    });

    weatherBalloonByCoords(config.lat0, config.lon0);
}