document.addEventListener("DOMContentLoaded", init);

/**Initialisation */

const colorBox = document.getElementById('color-box');
const changeColorBtn = document.getElementById('change-color-btn');
changeColorBtn.addEventListener("click", changeColor);


/**Fonction qui permet de générer aléatoirement les couleurs hexadécimales */

function getRandomColor() {
    const lettres = '0123456789ABCDEF';
    let color = "#";
    for (let i=0; i < 6; i++){
        color += lettres[Math.floor(Math.random() * 16)]
    }
    return color;
}

/**Fonction qui change la couleur de fond */

function changeColor(){
    const colorBox = document.getElementById('color-box');
    colorBox.style.backgroundColor = getRandomColor();
}