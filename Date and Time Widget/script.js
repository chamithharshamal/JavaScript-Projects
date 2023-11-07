let dateContainer = document.querySelector('.date-container');
let hourContainer = document.querySelector('.hours');
let minutesContainer = document.querySelector('.minutes');
let secondsContainer = document.querySelector('.seconds');

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function formatTime(time) {
    return time < 10 ? `0${time}` : time; // if time is less than 10, add a 0 in front of it

}

function updateClock(){

    let date = new Date();// get the current date

    let day = weekdays[date.getDay()]; // getDay() returns a number between 0 and 6
    let month = months[date.getMonth()]; // getMonth() returns a number between 0 and 11
    let year = date.getFullYear(); //  getFullYear() returns a number between 0 and 11
    let hours = formatTime(date.getHours());
    let minutes = formatTime(date.getMinutes());
    let seconds = formatTime(date.getSeconds());

    dateContainer.innerHTML = `${day} ${month} ${year}`;
    hourContainer.innerHTML = hours;
    minutesContainer.innerHTML = minutes;
    secondsContainer.innerHTML = seconds;
}

setInterval(updateClock, 1000); // update the clock every second