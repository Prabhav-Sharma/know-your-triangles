//ES6 Version Code
const addElement = id => document.querySelector(id);

const btnBaseHeight = addElement("#btn-base-height");

btnBaseHeight.addEventListener("click", _=> {

    let base = parseInt(addElement("#input-base").value);
    let height = parseInt(addElement("#input-height").value);

    if (isNaN(base) || isNaN(height)) {
        addElement("#output-base-height").innerText = "Hi, base and height please? Doctor will be right with you!"
        return;
    } else {
        let area = 0.5 * base * height;
        addElement("#output-base-height").innerText = `Area: ${area} units`;
    }
})

const btnThreeSides = addElement("#btn-three-sides");

btnThreeSides.addEventListener("click", _=> {

    let sideOne = parseInt(addElement("#side-one").value);
    let sideTwo = parseInt(addElement("#side-two").value);
    let sideThree = parseInt(addElement("#side-three").value);

    if (isNaN(sideOne) || isNaN(sideTwo) || isNaN(sideThree)) {
        addElement("#output-three-sides").innerText = "Three Sides! I need Three Sides, not one, not two but THREE!"
    } else {
        let semi = 0.5 * (sideOne + sideTwo + sideThree);
        let easyCal = semi * (semi - sideOne) * (semi - sideTwo) * (semi - sideThree);
        let area = Math.sqrt(easyCal);
        addElement("#output-three-sides").innerText = `Area: ${area} Units`;
    }
})

const btnEquilateral = addElement("#btn-equilateral");

btnEquilateral.addEventListener("click", _=> {
    let equilateralSide = parseInt(addElement("#equilateral-side").value)

    if (isNaN(equilateralSide)) {
        addElement("#output-equilateral").innerText = "One Job, you had one job!"
    } else {
        let area = equilateralSide * equilateralSide * (Math.sqrt(3) / 4);
        addElement("#output-equilateral").innerText = `Area: ${area} units`;
    }

})

const btnTrigo = addElement("#btn-trigo");

btnTrigo.addEventListener("click", _=> {

    let sideTrigo1 = parseInt(addElement("#trigo-side-one").value);
    let sideTrigo2 = parseInt(addElement("#trigo-side-two").value);
    let angleTrigo = parseInt(addElement("#trigo-angle").value);

    if (isNaN(sideTrigo1) || isNaN(sideTrigo2) || isNaN(angleTrigo)) {
        addElement("#output-trigo").innerText = "Let's go over what we need again: \n 1. First Side \n 2. Second Adjacent Side \n 3. An angle between them"
    } else {
        let angleInRad = angleTrigo * 0.0174533;
        let area = sideTrigo1 * sideTrigo2 * Math.sin(angleInRad);
        addElement("#output-trigo").innerText = `Area: ${area} units`;
    }

})