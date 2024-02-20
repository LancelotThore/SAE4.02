let pl = document.querySelector("#cam2").getAttribute('position');

function checkPlayerPosition() {
    console.log(pl.z)

    var playerPosition = document.getElementById('cam').getAttribute('position');
    var playerX = playerPosition.x;
    var playerY = playerPosition.y;
    var playerZ = playerPosition.z;
    
    // if (distanceFromCenter > islandRadius) {
    //     if(playerZ > 40 || playerZ < -40) {

    //     }
        
    //     // Calculer la position à la périphérie de l'île
    //     var newPosition = {
    //         x: directionToCenter.x * islandRadius,
    //         y: 2, // Réglez la hauteur à 1
    //         z: directionToCenter.z * islandRadius // Ajouter 55 à la position Z pour compenser le décalage initial
    //     };
        
    //     // Mettre à jour la position du joueur
    //     document.getElementById('cam').setAttribute('position', newPosition);
    // }
}

// Appeler la fonction checkPlayerPosition périodiquement (par exemple, chaque frame)
setInterval(checkPlayerPosition, 1000 / 60); // Appeler toutes les 60 fois par seconde (60 FPS)