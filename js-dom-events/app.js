function changeColorH1(){
    h1.style.color = 'blue';
    h1.textContent = 'Le nouveau texte du H1'
}

const h1 = document.querySelector('h1');
console.log(h1);

h1.addEventListener("click", changeColorH1);

