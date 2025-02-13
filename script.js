let hint;
let bubbles = document.querySelector('.bubbles');
let getHint = document.querySelector('#getHint');
let start = document.querySelector('#startGame');
let end = document.querySelector('#endGame');
let score = 0;
let div;

start.addEventListener('click',()=>{ startGame() });

// document.querySelector('body').addEventListener('click', function() {
//     if(end.style.display = "block"){
//         let limit = 4;
//         setInterval(() => {
//             if(limit >= 0){
//                 limit -= 1;
//             }
//         }, 1000);
//         end.style.display = "none";
//         start.style.display = "block";
//     }
// });

function createBubbles(){
    var str = "";
    for(var i = 0; i <= 90; i++){
        str += `<div class='bubble'>${Math.floor(Math.random()*10)}</div>`;
    }
    bubbles.innerHTML = str;
}

function changeHint(){
    hint = Math.floor(Math.random()*10);
    getHint.innerHTML = hint;
}

function startCounter(){
    let counter = document.querySelector('#counter');
    
    let limit = 60;
    setInterval(() => {
        if(limit >= 0){
            if(limit < 10) {
                limit = 0 + '' + limit;
            }
            counter.innerHTML = limit;
            limit -= 1;
        }
        if(document.querySelector('#counter').innerHTML === "00"){
            bubbles.innerHTML = "";
            getHint.innerHTML = "0";
            end.style.display = "block";
            end.innerHTML = `Game Over ${'<br><br>'} your score is ${score}`;
        }
    }, 1000);
}

function changeScore(){
    let setScore = document.querySelector('#score');

    bubbles.addEventListener('click', (e)=>{
        let clickedNumber = Number(e.target.innerHTML);
        if(clickedNumber === hint){
            score += 10;
            setScore.innerHTML = score;
            changeHint();
            createBubbles();
        }
    })
}

function startGame(){
    start.style.display = 'none';
    changeScore();
    startCounter();
    changeHint();
    createBubbles();
}
