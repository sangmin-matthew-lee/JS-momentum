const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const min = date.getMinutes();
    const hr = date.getHours();
    const sec = date.getSeconds();
    clockTitle.innerText = `${hr < 10 ? `0${hr}` : hr}:${min < 10 ? `0${min}`:min}:${sec < 10 ? `0${sec}` : sec}`;
}

function init() {
    getTime();
   setInterval(getTime, 1000);
}
init();



/*
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
}

//NOT handleResize() --> This call handleResize funtion right now!
//title.addEventListener("click", handleClick);    //This means call handleResize function when the window resized

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);   //use MDN
}
init();

function handleOffline(){
    console.log(`Offline`);
}

function handleOnline(){
    console.log(`Welcome back!`);
}
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);

//const title = document.getElementById ("title");
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";
function handleClick() {
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if(!hasClass){
    //     title.classList.add(CLICKED_CLASS);  
    // }else{
    //     title.classList.remove(CLICKED_CLASS);
    // }

    title.classList.toggle(CLICKED_CLASS);
}
*/