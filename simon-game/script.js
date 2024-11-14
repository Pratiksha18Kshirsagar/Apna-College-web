let gameSeq = [];
let userSeq = [];
let btn = ["red", "green", "yellow", "blue"]

let started = false;
let level = 0;
let h2 = document.querySelector("h2");


document.addEventListener("keypress", () => {
    if (started == false) {
        started = true;
        levelUp();

    }
})

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);

}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = btn[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    btnFlash(randomBtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);

}

function checkans(idx) {
    
    if (userSeq[idx] == gameSeq[idx]) {
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000);
        }
        
    }
    else {
        h2.innerHTML = `GameOver !! Your score was <b>${level}</b> <br>  Please press any key .`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress() {
    console.log("btn was pressed");
    let btn = this;
    console.log(btn);
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkans(userSeq.length-1);
}

let allButtons = document.querySelectorAll(".box");
for (let button of allButtons) {
    button.addEventListener("click", btnPress);

}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}