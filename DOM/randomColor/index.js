let btn = document.querySelector("button");
let h3 = document.querySelector("h3");
let div = document.querySelector("div");

btn.addEventListener("click" , ()=>{
    let random = randomColor();
    h3.innerText = random;
    div.style.backgroundColor = random;
})


function randomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red} , ${green} , ${blue})`;
    return color;
}