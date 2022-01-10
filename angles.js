//ES6 Version Code
const addElement = id => document.querySelector(id);

const angleOneInput = addElement("#angle-one");
const angleTwoInput = addElement("#angle-two");
const angleThreeInput = addElement("#angle-three");
const btnCheck = addElement("#btn-check");
const checkOutput = addElement("#check-output");
const checkType = addElement("#check-type");


const isTriangle =(one, two, three) => {
    let sum = one + two + three;
    if (sum === 180) {
        checkOutput.innerText = "That your Grace is a....Triangle!"
        if (one === 90 || two === 90 || three === 90) {
            checkType.innerText = "Type:  Right-Angled Triangle ⊿"
        } else if (one < 90 && two < 90 && three < 90) {
            checkType.innerText = "Type: Acute-Angled Triangle"
        } else if (one > 90 || two > 90 || three > 90) {
            checkType.innerText = "Type: Obtuse-Angled Triangle"
        }
    } else {
        checkOutput.innerText = "I'm afraid but this does not resemble a triangle at all. Maybe an avocado 🥑?"
        checkType.innerText ="";
    }
}

btnCheck.addEventListener("click", _=> {
    let angleOne = parseInt(angleOneInput.value);
    let angleTwo = parseInt(angleTwoInput.value);
    let angleThree = parseInt(angleThreeInput.value)

    if(isNaN(angleOne) || isNaN(angleTwo) || isNaN(angleThree)){
        checkOutput.innerText = "I'm gonna need those values we talked about to make this work.";
        checkType.innerText = "";
    }else{
        isTriangle(angleOne, angleTwo, angleThree);
    }
});