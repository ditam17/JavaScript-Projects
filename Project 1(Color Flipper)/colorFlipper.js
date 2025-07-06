const BODY= document.getElementsByTagName("body")[0];

function setColor(name="yellow"){
    BODY.style.backgroundColor=name;
}

function randomColor(){
    const red=Math.round(Math.random()*255);
    const green=Math.round(Math.random()*255);
    const blue=Math.round(Math.random()*255);
    BODY.style.backgroundColor = `rgb(${red},${green},${blue})`;
}
