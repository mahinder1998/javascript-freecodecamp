const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
 

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2024,5,25,12,30,0);

const futureDate = new Date(tempYear, tempMonth, tempDay + 7, 11,30,0)


let month = futureDate.getMonth();
month = months[month]

const weekday = weekdays[futureDate.getDay()];

const date = futureDate.getDate();
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
giveaway.textContent = `giveaway ends on ${date} ${weekday}, ${month} ${year} ${hours}:${mins}am`;


// future time in milliseconds
const futureTime = futureDate.getTime();


function getRemainingTime(){
    const today = new Date().getTime();

    const t = futureTime - today;

    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24 hr

    // values in ms
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;

    // calculate all values
    let days = t/oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay ) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t% oneMinute) / 1000)
    

    // set Values array
    const values = [days,hours,minutes,seconds];

    function format(item){
        if(item < 10){
            return (item = `0${item}`);
        }
        else{
            return item;
        }
    }

    items.forEach(function(item, index){
        item.innerHTML = format(values[index]);
    })

    if(t < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired"> Sorry, this giveaway has expired. </h4>`
    }

}

// countdown
const countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();