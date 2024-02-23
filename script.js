//score board
var score = 0;

function handlerScore(ev){
    if (ev.target.id.includes('object')){
        score += 1;
        for (let el of document.querySelectorAll('#score')){
            el.setAttribute('text', {value: 'Dechets collectes : ' + score + '/5'});
        }
    }
    if (score == 5){
        for (let el of document.querySelectorAll('#score')){
            el.setAttribute('text', {value: 'Vous avez gagne !'});
        }

    }
}

document.addEventListener("click", handlerScore);

// bordure
function update() {
    checkPlayerPosition();
    requestAnimationFrame(update);
}

function checkPlayerPosition() {
    var playerPosition = document.getElementById('cam2').getAttribute('position');
    var playerX = playerPosition.x;
    var playerY = playerPosition.y;
    var playerZ = playerPosition.z;

    let form = Math.sqrt((playerX**2)+(playerZ**2));

    if (form > 55) {
        document.getElementById('cam').setAttribute('position', {x : 0, y: 1.6, z: 0 });
        document.getElementById('cam2').setAttribute('position', { x: 0, y: playerY, z: 0 });
    }
}

requestAnimationFrame(update);