function addElement(id) {
    return document.querySelector(id);
}

var btnBaseHeight = addElement("#btn-base-height");

btnBaseHeight.addEventListener("click", function baseHeightHandler() {

    var base = parseInt(addElement("#input-base").value);
    var height = parseInt(addElement("#input-height").value);

    if (isNaN(base) || isNaN(height)) {
        addElement("#output-base-height").innerText = "Hi, base and height please? Doctor will be right with you!"
        return;
    } else {
        var area = 0.5 * base * height;
        addElement("#output-base-height").innerText = "Area: " + area + " units";
    }
})

var btnThreeSides = addElement("#btn-three-sides");

btnThreeSides.addEventListener("click", function threeSideHandler() {

    var sideOne = parseInt(addElement("#side-one").value);
    var sideTwo = parseInt(addElement("#side-two").value);
    var sideThree = parseInt(addElement("#side-three").value);

    if (isNaN(sideOne) || isNaN(sideTwo) || isNaN(sideThree)) {
        addElement("#output-three-sides").innerText = "Three Sides! I need Three Sides, not two, not one but THREE!"
    } else {
        var semi = 0.5 * (sideOne + sideTwo + sideThree);
        var easyCal = semi * (semi - sideOne) * (semi - sideTwo) * (semi - sideThree);
        var area = Math.sqrt(easyCal);
        addElement("#output-three-sides").innerText = "Area: " + area + " Units";
    }
})

var btnEquilateral = addElement("#btn-equilateral");

btnEquilateral.addEventListener("click", function equilateralHandler() {
    var equilateralSide = parseInt(addElement("#equilateral-side").value)

    if (isNaN(equilateralSide)) {
        addElement("#output-equilateral").innerText = "One Job, you had one job!"
    } else {
        var area = equilateralSide * equilateralSide * (Math.sqrt(3) / 4);
        addElement("#output-equilateral").innerText = "Area: " + area + " Units"
    }

})

var btnTrigo = addElement("#btn-trigo");

btnTrigo.addEventListener("click", function trigoHandler() {

    var sideTrigo1 = parseInt(addElement("#trigo-side-one").value);
    var sideTrigo2 = parseInt(addElement("#trigo-side-two").value);
    var angleTrigo = parseInt(addElement("#trigo-angle").value);

    if (isNaN(sideTrigo1) || isNaN(sideTrigo2) || isNaN(angleTrigo)) {
        addElement("#output-trigo").innerText = "Let's go over what we need again: \n 1. First Side \n 2. Second Adjacent Side \n 3. An angle between them"
    } else {
        var angleInRad = angleTrigo * 0.0174533;
        var area = sideTrigo1 * sideTrigo2 * Math.sin(angleInRad);
        addElement("#output-trigo").innerText = "Area: " + area + " Units"
    }

})