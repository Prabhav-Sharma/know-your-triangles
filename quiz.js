function addElement(id) {
    return document.querySelector(id);
}

var btnSubmit = addElement("#btn-submit");



btnSubmit.addEventListener("click", function checkAnswers(){
var score = 0;

    if(addElement("#right-2").checked){
        score = score + 1;
    }
    if(addElement("#right-3").checked){
        score = score + 1;
    }
    if(addElement("#right-4").checked){
        score = score + 1;
    }
    if(addElement("#right-5").checked){
        score = score + 1;
    }
    if(addElement("#right-6").checked){
        score = score + 1;
    }
    if(addElement("#right-7").checked){
        score = score + 1;
    }
    if(addElement("#right-8").checked){
        score = score + 1;
    }
    if(addElement("#right-9").checked){
        score = score + 1;
    }
    if(addElement("#right-10").checked){
        score = score + 1;
    }
    if(addElement("#right-11").checked){
        score = score + 1;
    }
    
    addElement("#score-stat").innerText ="Your Score: " + score;
})