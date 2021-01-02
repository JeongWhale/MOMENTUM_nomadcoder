const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1");
console.log(clockContainer);

function currentTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    
    clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
    currentTime();
    setInterval(currentTime,500);
 }

 init();