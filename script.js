let pl = document.querySelector("#cam2").getAttribute('position');

function checkPlayerPosition() {
    var playerPosition = document.getElementById('cam2').getAttribute('position');
    var playerX = playerPosition.x;
    var playerY = playerPosition.y;
    var playerZ = playerPosition.z;

    // console.log("Z : " + playerZ);
    // console.log("X : " + playerX);

    if (playerZ > 55 || playerZ < -55) {
        
        playerZ = 0;

        document.getElementById('cam2').setAttribute('position', { x: playerX, y: playerY, z: 0 });
    }
}

setInterval(checkPlayerPosition, 1000 / 60);