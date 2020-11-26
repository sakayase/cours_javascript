document.getElementById("id"); 
document.querySelector("#id"); -> c'est la même chosedocument.getElementsByClassName("class");
document.querySelectorAll(".class"); -> c'est la même chosedocument.getElementsByTagName("li");
document.querySelectorAll("li"); -> c'est la même chosemonElement.textContent -> Le texte de mon élément (ça enlève tout ce qui a comme balise dedans)<p><a href="">Du lien</a></p>
Si je fais sur mon p un :
textContent -> Du lien
innerHTML -> <a href="">Du lien</a>monElement.style ça permettait d'ajouter/modifier une propriété CSS d'un élément
monElement.classList.add() ça ajoutait une classe à un élémentSi je veux pouvoir modifier le style d'un élément quand j'en ai plusieurs dans un tableau,
J'ai pas le choix: Je dois utiliser une boucle et du coup agir sur mes éléments
un par un