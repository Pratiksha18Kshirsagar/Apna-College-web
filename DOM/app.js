let para = document.getElementById("description");
// console.log(para);

// To acess any node in the document in the object form. use "dir"
console.dir(para);


let img = document.getElementsByClassName("oldImg");

console.log(img);

//  for (let i = 0; i < img.length; i++) {
//     img[i].src = "assets/spiderman_img.png"
//     console.dir(img[i].src);

//  }


let tag = document.getElementsByTagName("span");
console.log(tag);


let queryId = document.querySelector("#description");
let queryClass = document.querySelector("p");
let querySingleElement = document.querySelector(".oldImg");
let queryAllElement = document.querySelectorAll(".oldImg");



let heading = document.querySelector("h1");
heading.append("pratiksha");

let newEl = document.createElement("p");
heading.appendChild(newEl);
newEl.innerText = "Kshirsagar"

let newEl2 = document.createElement("img");
newEl2