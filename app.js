// lightmode:
// Après avoir dans le css, mis le dark sur mon body par defaut. J'ai mis toutes mes var mode clair dans la classe light.
// Et dans le js, je pointe vers mon bouton, et lui demande au clic de lancer la fonction change.
// La fonction change où je déclare la var blanc, qui pointe vers la classe du body. Et la fonction switch/toggle sur la classe light=mode clair
let couleur = document.getElementById('lightmode');
couleur.addEventListener('click', change);
function change() {
    let blanc = document.body
    blanc.classList.toggle("light");
}