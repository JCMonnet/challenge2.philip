// lightbox: Je déclare mes 2 variables, imgP pour l'image en petit. imgG pour l'image en grand. 
let imgP=document.getElementById('modal1');
let imgG=document.getElementById('modal2');
// je lance le event sur la div contenant la petite image, au clic, et de lancer la fonction apparait.
imgP.addEventListener ('click', apparait);
// je définis la fonction apparait. A savoir passe moi le conteneur petite image en none(donc caché).
// Et passe moi le conteneur grande image en block (donc apparent).
function apparait (){
  imgP.style.display='none';
  imgG.style.display='block';
}

// Ici même chose dans l'autre sens. Donc event au clic sur conteneur grande image.
// Et réinverse les valeurs block/none des 2 conteneurs
imgG.addEventListener ('click',fermeture);
function fermeture (){
  imgG.style.display='none'
  imgP.style.display='block';
}