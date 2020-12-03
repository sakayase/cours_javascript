'use strict';
export class Player {
    constructor(nbLifes, pseudo) {
        this.nbLifes = nbLifes;
        this.pseudo = pseudo;
    }

    hello() {
        console.log(`Bonjour, je suis ${this.pseudo} et j'ai ${this.nbLifes} vies.`);
    }
}