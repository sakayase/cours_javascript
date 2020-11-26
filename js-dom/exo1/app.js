'use strict';

/* 
    Récupérer le paragraphe ayant pour id "invisible", et le cacher grâce à la propriété display en CSS
    Récupérer les deux paragraphes ayant pour classe "text" et leur rajouter une classe "text-primary" (dans style.css, met le texte en violet)
    Récupérer tous les paragraphes et modifier leur texte en "Ce paragraphe a été hacké!"
    A la fin, dans le navigateur ne doit se trouver que deux paragraphes
    En violet (grâce à la classe text-primary" ajouté)
    Dont le contenu est ''Ce paragraphe a été hacké"
*/


//Récupérer le paragraphe ayant pour id "invisible", et le cacher grâce à la propriété display en CSS
const invisible = document.querySelector('#invisible');
invisible.style.display = 'none';

//Récupérer les deux paragraphes ayant pour classe "text" et leur rajouter une classe "text-primary" (dans style.css, met le texte en violet)
let text = document.querySelectorAll('.text');
for(let i=0; i<text.length; i++){
    text[i].classList.add('text-primary');
} 

//Récupérer tous les paragraphes et modifier leur texte en "Ce paragraphe a été hacké!"
const paragraphs = document.querySelectorAll('p');
for (let i=0; i<paragraphs.length; i++){
    paragraphs[i].textContent = 'Ce paragraphe a été hacké!';
}