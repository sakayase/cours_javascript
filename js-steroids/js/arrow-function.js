'use strict';

// 1ère exemple
function test() {
    console.log("Hello World");
}

const test = function() {
    console.log("Hello World");
}

const test = () => { console.log("Hello World"); }



// 2ème exemple

function isGreaterThanZero(nb) {
    return nb > 0;
}

// Version longue
const isGreaterThanZero = (nb) => {return nb>0};

// Version courte
const isGreaterThanZero = nb => nb>0;

// Quand il n'y a qu'un seul paramètre, les parenthèses peuvent être enlevées
// par contre, quand il y en a zéro ou plus que 1, les parenthèses sont obligatoires

// Si il y a une seule instruction dans ma fonction, les accolades ne sont pas
// Obligatoires

// Le mot-clé return n'est pas obligatoire lorsqu'il y a une seule instruction

// () =>, ça se traduit par function()

console.log(isGreaterThanZero(13));
console.log(isGreaterThanZero(-3));





// 3ème exemple

function isAdult(nb) {
    if(nb >=18) {
        return "Majeure";
    }
    else {
        return "Mineure";
    }
}

function isAdult(nb) {
    return nb>= 18 ? "Majeure" : "Mineure";
}

const isAdult = nb => nb>=18 ? "Majeure" : "Mineure";

console.log(isAdult(19));
alert(isAdult(14));


/* 
Exercices Fonctions fléchées:

Créer une fonction qui renvoie le carré d'un nombre

Créer une fonction qui demande un nom et récupère "Bonjour, <nom>"...
dans le but de l'afficher dans la console ou en message d'alerte ou dans le DOM
*/


const sqr = (nb) => nb * nb;

console.log(sqr(2));
console.log(sqr(10));

const displayName = () => `Bonjour, ${String(prompt('Votre nom:'))}`;

console.log(displayName());