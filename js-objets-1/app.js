/* 
Ecrire un objet pour créer une chaise
On aimerait renseigner:
- sa couleur
- sa matière (plastique, métal, bois, etc...)
- son nombre de pieds

Ecrire une méthode isBroken qui permet, à partir du nombre de pieds,
de savoir si la chaise est cassée

Ecrire une méthode breakLegChair qui casse un pied d'une chaise

Ecrire une méthode display qui m'indique un message du type:
La chaise rouge en métal n'est pas cassée
*/

let chair = {
    color: 'brown',
    material: 'wood',
    nbOfLeg: 4,

    isBroken () {
        return this.nbOfLeg < 4
    },

    breakLegChair () {
        this.nbOfLeg -= 1;
    },

    display () {
        if (this.isBroken()) {
            console.log(`La chaise ${this.color} en ${this.material} est cassée`);
        }
        else {
            console.log(`La chaise ${this.color} en ${this.material} n\'est pas cassée`);
        }
    }
}

chair.display();

chair.breakLegChair();

chair.display();