var layer = document.querySelector(".layer");
var container = document.querySelector(".container");
var grilles = document.querySelector(".grid-container");
var Turn = null;
var clicked = 0;

function start(){
    layer.style.display = 'none';
    container.style.display ="block";
    grilles.style.display ="inline-block";
    return true;
};

function startMorpion(clicked_id){
    start();
    if(clicked_id === "player1"){
        Turn = true;
        console.log("Go player1");
    }else{
        Turn = false;
        console.log("Go player2");
    }
}

function choiseCase(clicked_id){
    Turn === true ?
    document.getElementById(clicked_id).innerHTML = "X":
    document.getElementById(clicked_id).innerHTML = "O"; 
}