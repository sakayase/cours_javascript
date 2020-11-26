'use strict';

/*
Reproduire en JS seulement ! 

<nav>
    <a href="/">Accueil</a>
    <a href="/services">Mes services</a>
    <a href="/contact">Contact</a>
</nav>

*/

// const body = document.querySelector('body');
// Raccourci -> uniquement pour body
const body = document.body;

const nav = document.createElement('nav');
console.log(nav);

let newLink = function (href, text) {
    /*
    crée un nouveau node <a> avec comme arguement href la variable fournie, le textContent avec le text fourni. 
    */
    const link = document.createElement('a');
    link.href = href;
    link.textContent = text;
    return link
}

const link1 = newLink('/', 'Acceuil');
const link2 = newLink('/services', 'Mes services');
const link3 = newLink('/contact', 'Contact');

body.prepend(nav);
nav.append(link1);
nav.append(link2);
nav.append(link3);


// autre fonction
function createLinkInNav(url, text) {
    const link = document.createElement("a");
    link.href = url;
    link.textContent = text;
    nav.append(link);
}

createLinkInNav("/","Accueil");
createLinkInNav("/services", "Mes services");
createLinkInNav("/contact", "Contact");