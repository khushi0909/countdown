    const newYears = '1 Jan 2023';

const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minsEl = document.getElementById("mins")
const secondsEl =document.getElementById("seconds")



    function countdown(){

        const newYearsDate = new Date(newYears);
        const currentDate = new Date();
        diff = newYearsDate - currentDate;
        const Tseconds = (diff/1000);
        const mins = Math.floor(Tseconds/60)%60;
        const hours = Math.floor(Tseconds/3600)%24;
        const days = Math.floor(Tseconds/(3600*24));
        const seconds = Math.floor(Tseconds%60);
        // console.log(diff,seconds,mins,hours,days);

        
            daysEl.innerHTML = days;
             hoursEl.innerHTML = formatTime(hours);
             minsEl.innerHTML = formatTime(mins);
             secondsEl.innerHTML = formatTime(seconds);

        
    } 
    function formatTime(time){
return time < 10 ? `0${time}` :time ;

    }
    countdown();
    setInterval(countdown,1000)