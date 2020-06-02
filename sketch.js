var jsdate = new Date();
var dayOfWeek = jsdate.getDay();

function setup() {
    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);
}

function draw() {
    background(100);

    let rows = 7;
    let rh = height / rows;

    let mt = month();
    let dy = day();
    let hr = hour();
    let mn = minute();
    let sc = second();
    let ms = int(millis() % 1000);

    let ratio = 0;
    let offset = 40;

    textSize(20);

    let MoY = map(mt, 0, 12, 0, width);
    ratio = int(mt / 12 * 100)
    rect(0, rh*0, MoY, rh);
    text(mt, 0, rh*1);
    text(ratio + "%", MoY - offset, rh*1);

    let DoM = map(dy, 0, 30, 0, width);
    ratio = int(dy / 30 * 100)
    rect(0, rh*1, DoM, rh);
    text(dy, 0, rh*2);
    text(ratio + "%", DoM - offset, rh*2);

    let DoW = map(dayOfWeek, 0, 7, 0, width);
    ratio = int(dayOfWeek / 7 * 100)
    rect(0, rh*2, DoW, rh);
    text(dayOfWeek, 0, rh*3);
    text(ratio + "%", DoW - offset, rh*3);

    let HoD = map(hr, 0, 24, 0, width);
    ratio = int(hr / 24 * 100)
    rect(0, rh*3, HoD, rh);
    text(hr, 0, rh*4);
    text(ratio + "%", HoD - offset, rh*4);

    let MoH = map(mn, 0, 60, 0, width);
    ratio = int(mn / 60 * 100)
    rect(0, rh*4, MoH, rh);
    text(mn, 0, rh*5);
    text(ratio + "%", MoH - offset, rh*5);

    let SoM = map(sc, 0, 60, 0, width);
    ratio = int(sc / 60 * 100)
    rect(0, rh*5, SoM, rh);
    text(sc, 0, rh*6);
    text(ratio + "%", SoM - offset, rh*6);

    let MoS = map(ms, 0, 1000, 0, width);
    ratio = int(ms / 1000 * 100)
    rect(0, rh*6, MoS, rh);
    text(ms, 0, rh*7);
    text(ratio + "%", MoS - offset, rh*7);

    let birthday = new Date("10/28/1995");
    let deathday = new Date("10/28/2065");
    //calc_life(birthday);
}


function calc_life(birth) {
    var today = new Date()

    // To calculate the time difference of two dates
    var Difference_In_Time = today.getTime() - birth.getTime()

    // To calculate the no. of days between two dates
    var Difference_In_Seconds = Difference_In_Time / (1000)
    var Difference_In_Minutes = Difference_In_Time / (1000 * 60)
    var Difference_In_Hours = Difference_In_Time / (1000 * 3600)
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)
    var Difference_In_Weeks = Difference_In_Days / 7
    var Difference_In_Months = Difference_In_Time / (1000 * 3600 * 24)
    var Difference_In_Years = Difference_In_Time / (1000 * 3600 * 24)

    //To display the final no. of days (result)
    textSize(30)
    text("Time between \n" + birth + "\n" + today + "\n", 50, 50)
    text("\nSecond \n" + Difference_In_Seconds, 50, 200)
    text("\nMinutes \n" + Difference_In_Minutes, 50, 300)
    text("\nHours\n" + Difference_In_Hours, 50, 400)
    text("\nDays \n" + Difference_In_Days, 50, 500)
}
