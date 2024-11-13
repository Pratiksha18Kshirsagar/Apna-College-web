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
    level++;
    h2.innerText = `level ${level}`;
    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = btn[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    btnFlash(randomBtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);

}

function checkans(){

}

function btnPress() {
    console.log("btn was pressed");
    let btn = this;
    console.log(btn);
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkans();
}

let allButtons = document.querySelectorAll(".box");
for (let button of allButtons) {
    button.addEventListener("click", btnPress);

}