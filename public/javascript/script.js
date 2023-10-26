let timer = 60;
let score = 0;
let hit = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#score").textContent = score;
}

function getNewHit (){
    hit = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = hit;
}

function runTimer (){
    let timerval = setInterval(()=>{
        if(timer > 0){
            timer--;
            // document.getElementById('#timerVal').innerHTML = timer;
            document.querySelector("#timerVal").textContent = timer;
        }else{
            clearInterval(timerval);
            document.querySelector("#pbtm").innerHTML = "<h1>Game Over</h1>";
        }
    }, 1000);
    
}

function makeBubble(){
    var clutter = "";

    for(i=1;i<=150;i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble"><h3>${rn}</h3></div>`;
    }
    
    document.querySelector('#pbtm').innerHTML = clutter; 
}

document.querySelector("#pbtm").addEventListener("click", function(clickdets){
    var clickednum = Number(clickdets.target.textContent);

    if(clickednum === hit){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

makeBubble();
runTimer();
getNewHit();

// event bubbling is the process in which an element is accessed when an event is toggled and it checks whether the event matches or not if not then it goes to is parent and search if not found then to the parents parent ....