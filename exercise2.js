function generateWord() {
    var randomNum = Math.floor(Math.random() * 5);
    var randomNum2 = Math.floor(Math.random() * 5);
    var nounchoose = [" car", " cash", " house", " girl", " jewelry"];
    var adjectivechoose = ["beautiful", "shiny", "luxurious", "charming", "clean"];
    document.getElementById("output").innerHTML += "What a " + adjectivechoose[randomNum] + nounchoose[randomNum2] + "!<br/>";
}