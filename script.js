// JavaScript
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const currentDate = document.getElementById("currentDate");

// to get a new Date or current Date using Date() function
currentDate.textContent = new Date().toDateString()
const newYearTime = new Date("Jan 1, 2023 00:00:00").getTime()

updateCountdown();

function updateCountdown(){
    let now = new Date().getTime();
    let gap = newYearTime - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let d = Math.floor(gap/day);
    let h = Math.floor((gap%day) / hour);
    let m = Math.floor((gap%hour) / minute);
    let s = Math.floor((gap%minute) / second);

    dayEl.textContent = d;
    hourEl.textContent = h;
    minuteEl.textContent = m;
    secondEl.textContent = s;

    // set timeout call this fuction in every one second.
    setTimeout(updateCountdown, second)
}