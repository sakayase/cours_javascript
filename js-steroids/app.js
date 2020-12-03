'use strict';
/*

Créer une classe Player
Cette classe a une propriété nbLifes que l'utilisateur
peut préciser et une propriété pseudo
Ajouter une méthode hello à cette classe, et qui affiche
"Bonjour, je suis pseudo et j'ai x vies"

Créer une classe Guerrière (Warrior) qui hérite de player
Créer une méthode kick() qui affiche "Ouille!" dans la console

Créer une classe Magician qui hérite de Player
Créer une méthode spell() qui affiche "Foudre!" dans la console

Créer un perso Warrior avec un pseudo rigolo et un perso Magician avec un
pseudo badass
Lancer kick et hello sur le perso Warrior
Lancer spell et hello sur le perso Magician

Bonus: 
Créer une propriété mana pour le magicien.
Chaque sort utilise 10 points de mana.
Si il n'y a plus assez de mana, spell() affiche "Pas assez de mana!"

Bonus numéro 2:
Chaque classe est dans son propre fichier
La création des persos et leurs actions seront faits dans le app.js
*/

import {Player} from './classes/player.js';
import {Warrior} from './classes/warrior.js';
import {Wizard} from './classes/wizard.js';


const saka = new Player(3, 'saka');
console.log(saka);

const warrior1 = new Warrior(3, 'Dudule');
const wizard1 = new Wizard(3, 'Gandalf le Gland', 15);

warrior1.hello();
warrior1.kick();
wizard1.hello();
wizard1.showMana();
wizard1.spell();
wizard1.showMana();
wizard1.spell();

