// Déclaration de la variable score et initialisation à 0
var score = 0;

// Fonction pour gérer le score lorsqu'un événement de clic se produit
function handlerScore(ev){
    // Vérifie si l'élément cliqué a un ID contenant 'object'
    if (ev.target.id.includes('object')){
        // Vérifie si la classe 'clicked' n'est pas déjà présente sur l'élément cliqué
        if (ev.target.classList.contains('clicked') == false){
            // Si la classe 'clicked' n'est pas présente, incrémente le score de 1
            score += 1;
            // Met à jour le texte de tous les éléments avec l'ID 'score' pour afficher le nouveau score
            for (let el of document.querySelectorAll('#score')){
                el.setAttribute('text', {value: 'Déchets collectés : ' + score + '/5'});
            }
            // Ajoute la classe 'clicked' à l'élément cliqué pour indiquer qu'il a déjà été traité
            ev.target.classList.add('clicked');
        }
    }
    // Vérifie si le score atteint 5
    if (score == 5){
        // Si oui, met à jour le texte de tous les éléments avec l'ID 'score' pour indiquer que le joueur a gagné
        for (let el of document.querySelectorAll('#score')){
            el.setAttribute('text', {value: 'Vous avez gagné !'});
        }
        // change l'affichage du panneau
        document.querySelector("#tutoText").setAttribute('text', {value: 'Bien joue ! Maintenant l`ile est propre. Merci beaucoup !'});
    }
}

// Ajoute un listener pour que à chaque clics sur tout le document, il execute la fonction handlerScore
document.addEventListener("click", handlerScore);




// bordure

// Fonction qui sera appelée en boucle pour mettre à jour la position du joueur
function update() {
    // Vérifie la position du joueur
    checkPlayerPosition();
    // Demande au navigateur d'exécuter à nouveau la fonction update lors du prochain rafraîchissement de l'écran
    requestAnimationFrame(update);
}

// Fonction pour vérifier la position du joueur et effectuer des actions en conséquence
function checkPlayerPosition() {
    // Récupère la position du joueur depuis l'élément avec l'ID 'cam2'
    var playerPosition = document.getElementById('cam2').getAttribute('position');
    // Récupère les coordonnées x, y et z du joueur
    var playerX = playerPosition.x;
    var playerY = playerPosition.y;
    var playerZ = playerPosition.z;

    // Calcul de la distance euclidienne (norme) depuis l'origine du plan horizontal (x, z)
    let distanceFromOrigin = Math.sqrt((playerX ** 2) + (playerZ ** 2));

    // Vérifie si la distance du joueur depuis l'origine du plan dépasse 55
    if (distanceFromOrigin > 55) {
        // Recentre le conteneur de la caméra à la position (0, 1.6, 0)
        document.getElementById('cam').setAttribute('position', {x : 0, y: 1.6, z: 0 });
        // Recentre également la caméra au centre (0, playerY, 0) de la map
        document.getElementById('cam2').setAttribute('position', { x: 0, y: playerY, z: 0 });
    }
}

// Lance la première exécution de la fonction update
requestAnimationFrame(update);