let url =  "https://v2.jokeapi.dev/joke/Dark?type=single" ;
let btn = document.querySelector("button");
let p = document.createElement("p");
let container = document.querySelector(".container");
container.append(p);
let img = document.createElement("img");
btn.insertAdjacentElement("beforebegin" , img);


async function getJoke(){
    let res = await fetch(url);
    let data = await res.json();
    p.innerText = data.joke;
    img.src = "lol.jpg";
    
}


btn.addEventListener("click" ,async()=>{
    await getJoke();
})