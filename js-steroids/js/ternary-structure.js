'use strict';
// Structure ternaire - Opérateur conditionnel

const isMember = true;
let cost;

if(isMember) { 
    cost = 5; 
} 
else { 
    cost = 12; 
}


// condition ? exprSiVrai : exprSiFaux
// isMember ? cost=5 : cost=12;
cost = isMember ? 5 : 12;

// const isMember = true;
// const cost = isMember ? 5 : 12;



/* 
  Checker si un nombre est pair ou impair
  Checker si une personne est majeure ou non
*/

const nb = Number(prompt("Entrez votre nombre"));
nb % 2 == 0 ? console.log(`${nb} est pair`) : console.log(`${nb} est impair`);

const age = Number(prompt("Entrez votre age"));
age >= 18 ? console.log(`La personne à ${age} an(s), elle est majeure`) : console.log(`La personne à ${age} an(s), elle est mineure`);
