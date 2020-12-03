'use strict';

/*
Dans un fichier loop.js, vous allez créer une fonction qui prend un nombre
Et qui affiche de 1 à ce nombre dans la console

Demander dans app.js un nombre à l'utilisateur, et en profiter
pour exécuter dans app.js la fonction récupérée depuis loop.js
*/

import {loopDisplay} from './loop.js';

const nbUser = Number(prompt("Donnez un nombre entier"));
loopDisplay(nbUser);