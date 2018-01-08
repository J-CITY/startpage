const FORMAT_12 = 0;
const FORMAT_24 = 1;
var timeFormat = FORMAT_24;

function startTime() {
    let currentTime = new Date();
    let timeStr = timeFormat ? format24(currentTime) : format12(currentTime);
    document.getElementById('time').innerHTML = timeStr;
    var t = setTimeout(startTime, 500);
}

function format12(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    //var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

function format24(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let status = " PM "
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    //var strTime = hours + ":" + minutes + ":" + seconds;
    var strTime = hours + ":" + minutes;
    return strTime;
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function onClickTime() {
    timeFormat = !timeFormat;
};




 