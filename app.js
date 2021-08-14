function addElement(id) {
    return document.querySelector(id);
}

var angleOneInput = addElement("#angle-one");
var angleTwoInput = addElement("#angle-two");
var angleThreeInput = addElement("#angle-three");
var btnCheck = addElement("#btn-check");
var checkOutput = addElement("#check-output");
var checkType = addElement("#check-type");


function isTriangle(one, two, three) {
    var sum = one + two + three;
    if (sum === 180) {
        checkOutput.innerText = "That your Grace is a....triangle!"
        if (one === 90 || two === 90 || three === 90) {
            checkType.innerText = "Type:  Right-Angled Triangle ⊿"
        } else if (one < 90 && two < 90 && three < 90) {
            checkType.innerText = "Type: Acute-Angled Triangle"
        } else if (one > 90 || two > 90 || three > 90) {
            checkType.innerText = "Type: Obtuse-Angled Triangle"
        }
    } else {
        checkOutput.innerText = "I'm afraid but this does not resemble a triangle at all. Maybe an avocado 🥑?"
    }
}

btnCheck.addEventListener("click", function check() {
    var angleOne = parseInt(angleOneInput.value);
    var angleTwo = parseInt(angleTwoInput.value);
    var angleThree = parseInt(angleThreeInput.value)

    isTriangle(angleOne, angleTwo, angleThree);

})