var score = 0;

function handlerScore(ev){
    if (ev.target.id.includes('object')){
        score+=1;
        for (let el of document.querySelectorAll('#score')){
            el.setAttribute('text', {value: 'Dechets collectes : ' + score + '/4'});
        }
    }
    if (score == 4){
        console.log("Vous avez ramassé tous les objets !");
    }
}

document.addEventListener("click", handlerScore);