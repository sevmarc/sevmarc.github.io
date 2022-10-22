function format_date_to_spec_str(date) {
    const month = date.getUTCMonth(); //months from 1-12
    const day = date.getUTCDate();
    const newdate = month + "-" + day;

    return newdate;
}

function format_spec_str_to_upcoming_date(date_as_str) {
    const year = new Date().getUTCFullYear();
    const month = date_as_str.split('-')[0];
    const day = date_as_str.split('-')[1];
    let date = new Date(year, month - 1, day);
    if (date < new Date()) {
        date.setFullYear(date.getFullYear() + 1);
    }
    return date
}

function format_date_str(date_as_str) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date_as_str).toLocaleDateString("en-US", options)
}

function get_closest_upcoming_date(dates) {
    const today = new Date();
    const sorted_dates = dates.sort(function(a, b) {
        const distancea = Math.abs(today - a);
        const distanceb = Math.abs(today - b);
        return distancea - distanceb; // sort a before b when the distance is smaller
    });
    return sorted_dates[0];
}