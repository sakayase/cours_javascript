/*
Dans l'HTML, créer un titre H1 "La réponse à toute question de l'univers est...".
Dans le JS, au survol de ce titre h1, rajouter "42"
*/

function changeText() {
    this.textContent += ' 42';
}

h1 = document.querySelector('h1');
h1.addEventListener('mouseover', changeText);

// -----------------------

// const meats = document.querySelectorAll(".meat");
// console.log(meats);

// Un addEventListener ne s'applique que sur UN élément
// Si besoin d'appliquer addEventListener à plusieurs éléments
// Y aura de la boucle

/*
for(let i=0; i<meats.length;i++) {
    meats[i].addEventListener("click", getName);
}*/

// Pas correct, ou en tout cas ca marche si il y a très peu d'element car très gourmand en ressouces
//addEventListener -> c'est lourd, il faut les limiter dans le code js

//La bonne méthode sra d'appliquer un addEventListener sur l'élément parent à tout les sous elements où l'on veut une action

function getName(event) {
    console.log(event.target.textContent)  //permet de cibler le sous element sur lequel on clique
}

const meats = document.querySelector('.meats')
meats.addEventListener('click', getName)



/*
Créer un groupe de 5 boutons, avec à chaque fois en contenu son numéro (1 .. 2 ... 3). 
Au clic du bouton numéro 1, afficher l'image "img-1.jpg" dans un dossier img. 
Au clic du bouton numéro 2, afficher l'image "img-2.jpg", etc...
*/
/*
function displayImg(event) {
    const img = document.querySelector('.img')
    imgNum = event.target.id;
    newImg = document.createElement('img');
    newImg.src = `img/img${imgNum}.bmp`;
    newImg.classList.add('img');
    img.replaceWith(newImg);
}
const buttons = document.querySelector('.buttons--container');
buttons.addEventListener('click', displayImg);
*/

function displayImg(event) {
    const img = document.querySelector('.img');
    imgNum = event.target.id;
    newImg = document.createElement('img');
    newImg.src = `img/img${imgNum}.bmp`;
    newImg.classList.add('img');
    if (img == null) {
        buttons.after(newImg);
    } else {
        img.replaceWith(newImg);
    }
}
const buttons = document.querySelector('.buttons--container');
buttons.addEventListener('click', displayImg);

/*
Créer un champ de formulaire qui demande un nom. Au clic du bouton "Envoyer"...
Récupérer le contenu et afficher en alerte "Bonjour <Nom>!"
*/

function alertName() {
    const name = document.getElementById("name").value;
    alert(`Bonjour ${name} !`)

}
const submit = document.querySelector(".submit");
submit.addEventListener('click', alertName);
