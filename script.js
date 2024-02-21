let pl = document.querySelector("#cam2").getAttribute('position');
console.log(pl)

function checkPlayerPosition() {
    var playerPosition = document.getElementById('cam2').getAttribute('position');
    var playerX = playerPosition.x;
    var playerY = playerPosition.y;
    var playerZ = playerPosition.z;

    //console.log("Z : " + playerZ);
    // console.log("X : " + playerX);
    let form = Math.sqrt((playerX**2)+(playerZ**2));

    if (form > 55) {
        document.getElementById('cam').setAttribute('position', {x : 0, y: 1.6, z: 0 });
        document.getElementById('cam2').setAttribute('position', { x: 0, y: playerY, z: 0 });
    }
}

setInterval(checkPlayerPosition, 1000 / 60);