//ES6 Version Code
const addElement = id => document.querySelector(id);


const inputSideOne = addElement("#side-one");
const inputSideTwo = addElement("#side-two");
const btnCheck = addElement("#btn-check");
const outputStat = addElement("#check-output");

const calcHypotenuse = (one, two)=> {
    let hypotenuse = Math.sqrt(one * one  + two * two);
     
    outputStat.innerText = `Hypotenuse lenght: ${hypotenuse} units`;
}


btnCheck.addEventListener("click", _=>{

let sideOne = parseInt(inputSideOne.value);
let sideTwo = parseInt(inputSideTwo.value);
if(isNaN(sideOne) || isNaN(sideTwo)){
    outputStat.innerText= "I need the two sides on my desk ASAP Parker!"
}else{
    calcHypotenuse(sideOne, sideTwo);
}

});


