//ES6 Version Code
const addElement = id => document.querySelector(id);

const btnSubmit = addElement("#btn-submit");



btnSubmit.addEventListener("click", _=>{
let score = 0;

    if(addElement("#right-2").checked){
        score++;
    }
    if(addElement("#right-3").checked){
        score++;
    }
    if(addElement("#right-4").checked){
        score++;
    }
    if(addElement("#right-5").checked){
        score++;
    }
    if(addElement("#right-6").checked){
        score++;
    }
    if(addElement("#right-7").checked){
        score++;
    }
    if(addElement("#right-8").checked){
        score++;
    }
    if(addElement("#right-9").checked){
        score++;
    }
    if(addElement("#right-10").checked){
        score++;
    }
    if(addElement("#right-11").checked){
        score++;
    }
    
    addElement("#score-stat").innerText =`Your Score: ${score}`;
})