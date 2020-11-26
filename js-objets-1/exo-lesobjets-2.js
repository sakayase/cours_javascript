'use strict';
let people = ["Greg", "Mary", "Devon", "James"];

/*En utilisant une boucle, afficher le nom dans la console de chaque 
personne dans le groupe
*/

for (let i = 0; i < people.length; i++) console.log(people[i]);//plus long a ecrire moins gourmand en perf

//ou

for (name in people) console.log(people[name]); //plus gourmand en perf moins long a ecrire 

//ou

people.forEach(function(person, index){
    console.log(`A l'index ${index}, il y a la personne ${person}`)
})


//Ecrire une commande qui enlève "Greg" du tableau
people.splice(0,1);
console.log(people);

//Ecrire une commande qui enlève "James" du tableau
people.pop();
console.log(people);

//Ecrire une commande qui ajoute "Matt" au début du tableau
people.unshift("Matt");

//Ecrire une commande qui ajoute votre nom à la fin du tableau
people.push("Simon")
console.log(people);

//Faire une copie de ce tableau qui n'inclut pas "Mary" ou "Matt" 
let newPeople = people.slice(2);

console.log(`Les nouveaux gens sont: ${newPeople}`);

//Ecrire une commande qui donne la position de "Mary" dans le tableau

console.log(`L\'index de Mary est : ${people.indexOf("Mary")}`);


//Ecrire une commande qui vérifie bien que "Foo" n'est pas dans le tableau
if (people.includes("Foo")) console.log("Foo apparait dans le tableau");
else console.log('Foo n\'apparait pas dans le tableau');

//Supprimer "Devon" du tableau et ajouter à place "Elizabeth" et "Artie"
let indexDevon = people.indexOf('Devon');
people.splice(indexDevon, 1, "Elizabeth","Artie" );
console.log(people);

//Créer une nouvelle variable qui s'appelle withBob et qui est égal au tableau people + "Bob"
let withBob = people.slice(0);
withBob.push('Bob');
console.log(`withBob : ${withBob}`);

//Ecrire une commande qui affiche les noms du tableau à la suite, mais avec un "-" entre chaque nom */
console.log(withBob.join(" - "));