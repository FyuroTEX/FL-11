function formatTime(time) {
    let hour = (time / 60) % 24;
    let day = (time / 1440) % 60;
    let minuts = time % 60;
    return Math.floor(day) + ' day(s) ' + Math.floor(hour) + ' hour(s) ' + minuts + ' minute(s).';
}
console.log(formatTime(3601));