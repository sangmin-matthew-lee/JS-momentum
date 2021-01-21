const body = document.querySelector("body");

const IMG_NUMBER = 3; 

function genRamdom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function printImage(imgNumber)
{
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add(`bgImage`);
    body.prepend(image);
}

function init(){
    const randomNum = genRamdom();
    printImage(randomNum);
}
init();