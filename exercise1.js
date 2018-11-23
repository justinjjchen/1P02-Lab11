var colorPicker = ["red", "green", "blue", "yellow"];
var rigelArray = new Array(); 

function startGame() {
    var randoNum = Math.floor(Math.random() * 4);
    rigelArray.push(colorPicker[randoNum]);
    document.getElementById("simonSays").innerHTML = "Simon Says:" + colorPicker[randoNum];
    setTimeout(changeCol, 600);

    }

function changeCol() {
    document.getElementById("simonSays").innerHTML = "Simon Says:";
}

function redButton() {

    var red = "red";
    if (red == rigelArray[0]){
    rigelArray.pop(0);
    startGame();
    }
    else {
    document.getElementById("simonSays").innerHTML = "Simon Says: Game End";
    }
}

function greenButton() {

    var green = "green";
    if (green == rigelArray[0]){
    rigelArray.pop(0);
    startGame();
    }
    else {
    document.getElementById("simonSays").innerHTML = "Simon Says: Game End";
    }
}

function blueButton() {

    var blue = "blue";
    if (blue == rigelArray[0]){
    rigelArray.pop(0);
    startGame();
    }
    else {
    document.getElementById("simonSays").innerHTML = "Simon Says: Game End";
    }
}

function yellowButton() {

    var yellow = "yellow";
    if (yellow == rigelArray[0]){
    rigelArray.pop(0);
    startGame();
    }
    else {
    document.getElementById("simonSays").innerHTML = "Simon Says: Game End";
    }
}