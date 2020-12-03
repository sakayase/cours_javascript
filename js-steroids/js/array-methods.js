'use strict';
const marks = [3,12,15,11];

/* 
forEach 
*/ 
// Méthode boucle for
// for(let i=0; i<marks.length;i++) {
//     console.log(marks[i]);
// }

// forEach longue
// marks.forEach(function(value) {
//     console.log(value);
// })

//forEach court
marks.forEach(value => console.log(value));

// forEach avec index
marks.forEach((value,index) => console.log(`${index}:${value}`));



/*
map: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map
*/
const marksPlusOne = marks.map(element => element+1);
// marks.map((element) => {return element+1});
// marks.map(function(element) { return element+1});
console.log(marksPlusOne);

// [3,12,15,11]
// 3 -> retourne 3+1 -> retourner 4  | marksPlusOne = [4]
// 12 -> retourne 12+1 -> retourner 13 | marksPlusOne= [4,13]
// 15 -> retourne 15+1 -> retourne 16 | marksPlusOne = [4,13,16]
// 11 -> retourne 11+1 -> retourne 12 | marksPlusOne = [4,13,16,12]


/*
filter: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter
*/

const marksGreaterThanTwelve = marks.filter(element => element>=12);
console.log(marksGreaterThanTwelve);

// [3,12,15,11]

// 3  -> 3>=12 ? NON !    | marksGreaterThanTwelve = [];
// 12 -> 12>=12 ? OUI!  | marksGreaterThanTwelve = [12];
// 15 -> 15>=12 ? OUI! | marksGreaterThanTwelve = [12,15];
// 11 -> 11>= 12 ? NON! | marksGreaterThanTwelve = [12,15];


/*
find: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/find
*/

const greaterThanEleven = marks.find(element => element>=11);
console.log(greaterThanEleven);

// [3,12,15,11]

// 3 -> 3 >=11 NON ! IL CONTINUE
// 12 -> 12 >=11 OUI! Il s'arrête et met 12 dans la variable