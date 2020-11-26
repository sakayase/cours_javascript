'use strict';

//recuperer 1 element 
//const h1 = document.getElementById('title');
const h1 = document.querySelector('#title') // A PRIORISER (query selector ou query selector all)
console.log(h1);                //log la balise h1 et son contenu dans la console
console.log(h1.innerText)       //log le contenu de la balise h1 dans la console (text-content)

h1.innerHTML += " Bonjour les gens" //modifie le contenu de text-content 
console.log(h1.innerText)
console.log(h1.innerHTML)       //log la balise h1 en tant que texte

setTimeout(function() {         //au bout de 2000ms le style du h1 change pour que sa couleur devienne rouge, inutile juste pour l'ex
    // utile si on a des calculs a faire
    //h1.style.color = 'red';

    h1.classList.add('red');    //rajoute une classe
}, 2000)

//pour recup plusieurs elements
const lis = document.getElementsByTagName('li'); // <li>
console.log(lis);

const proteins = document.getElementsByClassName('proteins'); // recup les elements qui ont pour class proteins
console.log(proteins);

for(let i=0; i<proteins.length; i++) {
    proteins[i].textContent = "Du graaaaaaas";
}

const tchou = document.querySelector('#tchoutchou');   
console.log(tchou.href);         //sortir le href d'un lien



const link = document.createElement('a');
link.href = ''
link.textContent = 'un lien rajouté avec DOM';
const services = document.querySelector('#services');

services.append(link);