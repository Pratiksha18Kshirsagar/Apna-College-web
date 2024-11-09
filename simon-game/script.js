let gameSeq = [];
let userSeq = [];
let btn = ["red" , "green" , "yellow" , "blue"]

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress" , ()=>{
    if(started == false){
        started = true;
        levelUp();

    }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 1000);
}

function levelUp(){
    level++;
    h2.innerText = `level ${level}`;
    let randomIdx = Math.floor(Math.random()*3);
    let randomColor = btn[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`)
    btnFlash(randomColor);
}

