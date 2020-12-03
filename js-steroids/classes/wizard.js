'use strict';
import {Player} from './player.js';

export class Wizard extends Player {
    constructor(nbLifes, pseudo, mana) {
        super(nbLifes, pseudo);

        this.mana = mana;
    }

    spell() {
        if (this.mana < 10) {
            console.log('Pas assez de mana!');
        } else {
            console.log('Foudre!');
            this.mana -= 10;
        }
    }

    showMana() {
        console.log(this.mana)
    }
}