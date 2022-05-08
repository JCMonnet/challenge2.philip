let couleur=document.querySelector('body');
couleur.addEventListener('click',change);
function change () {
    couleur.classList.toggle("light");
}