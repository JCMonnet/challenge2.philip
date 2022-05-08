let couleur=document.getElementById('lightmode');
couleur.addEventListener('click',change);
function change () {
    let blanc=document.body
    blanc.classList.toggle("light");
}