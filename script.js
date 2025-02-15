let bubbles = document.querySelector('.bubbles');
let getHint = document.querySelector('#getHint');
let start = document.querySelector('#startGame');
let end = document.querySelector('#endGame');
let counter = document.querySelector('#counter');
let hint;
let score = 0;
let timeLeft = 60;
let temp = 7;

start.addEventListener('click',()=>{ startGame() });

function createBubbles(){
    var str = "";
    for(var i = 0; i <= 140; i++){
        str += `<div class='bubble'>${Math.floor(Math.random()*10)}</div>`;
    }
    bubbles.innerHTML = str;
}

function changeHint(){
    hint = Math.floor(Math.random()*10);
    getHint.innerHTML = hint;
}

function startCounter(){
    if(timeLeft === 0){
        bubbles.innerHTML = "";
        getHint.innerHTML = "0";
        end.style.display = "block";
        end.innerHTML = `Game Over ${'<br><br>'} your score is ${score}`;
        temp = 7;
        endGame();
    }
    if(timeLeft < 10) {
        timeLeft = 0 + '' + timeLeft;
    }
    counter.innerHTML = timeLeft;
    timeLeft --;
	if (timeLeft >= 0) {
		setTimeout(startCounter, 1000);
	}
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
    setTimeout(startCounter, 1000);
    changeHint();
    createBubbles();
}

function endGame(){
    if(temp === 0){
        counter.innerHTML = "60";
        document.querySelector("#score").innerHTML = "0";
        score = 0;
        end.style.display = "none";
        start.style.display = "block";
        timeLeft = 60;
    }
    temp--;
	if (temp >= 0) {
		setTimeout(endGame, 1000);
	}
}
