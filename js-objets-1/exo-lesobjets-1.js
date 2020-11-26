/* Définir une fonction constructeur Rectangle ayant les propriétés suivantes : length et width.

Ajouter les méthodes suivantes :
perimeter ( ) : retourne le périmètre du rectangle.
area( ) : retourne l'aire du rectangle.
isSquare( ) : retourne si le rectangle est un carré ou non.
display( ) : expose les caractéristiques d’un rectangle comme suit :
Longueur : […] - Largeur : […] - Périmètre : […] - Aire : […] - Il s’agit d’un carré / Il ne s’agit pas d’un carré */

function Rectangle (length, width) {
    // VARIABLES
    this.length = length,
    this.width = width,

    // METHODES 
    this.perimeter = function() {
        return this.length + this.width * 2
    },

    this.area = function() {
        return this.length * this.width
    },

    this.isSquare = function() {
        if (length === width) {
            return true
        }
        else {
            return false
        }     
    }

    this.display = function() {
        let sqr = '';
        if (this.isSquare()) {
            sqr = 'Il s\'agit d\'un carré';          
        }
        else {
            sqr = 'Il ne s\'agit pas d\'un carré';
        }
        console.log(`Longueur : ${this.length} - Largeur : ${this.width} - Périmètre : ${this.perimeter()} - Aire : ${this.area()} - ${sqr}`);
    }
}

let rect1 = new Rectangle(10, 10);
rect1.display();