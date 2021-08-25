var myMessage = document.getElementById("message");


function showMessage() {
    myMessage.className = "show";
}

setTimeout(showMessage, 3000);

var colorChanger = document.getElementById("color-changer");
var colors = ["blue", "red", "black", "green", "yellow", "pink"];
var counter = 0;

function changColor() {
    if (counter >= colors.length) {
        counter = 0;
    }


    colorChanger.style.background = colors[counter];
    counter++;
}

var myTimer = setInterval(changColor, 3000);

colorChanger.onclick = function () {

    clearInterval(myTimer);
    colorChanger.innerHTML = "Timer Stopped"
};
colorChanger.onmouseover = function () {

    clearInterval(myTimer);
    colorChanger.innerHTML = "Yo!, You Hoverd Up"
};
colorChanger.onmouseout = function () {

    setInterval(myTimer);
};