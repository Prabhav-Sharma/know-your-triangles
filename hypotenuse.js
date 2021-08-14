function addElement(id) {
    return document.querySelector(id);
}


var inputSideOne = addElement("#side-one");
var inputSideTwo = addElement("#side-two");
var btnCheck = addElement("#btn-check");
var outputStat = addElement("#check-output");

function calcHypotenuse(one, two){
    var hypotenuse = Math.sqrt(one * one  + two * two);
     
    outputStat.innerText = "Hypotenuse lenght: " + hypotenuse + " units";
}


btnCheck.addEventListener("click", function checkHandler(){

var sideOne = parseInt(inputSideOne.value);
var sideTwo = parseInt(inputSideTwo.value);
if(isNaN(sideOne) || isNaN(sideTwo)){
    outputStat.innerText= "I need the two sides on my desk ASAP Potter!"
}else{
    calcHypotenuse(sideOne, sideTwo);
}

})


