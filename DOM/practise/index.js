let div = document.createElement("div");
let body = document.querySelector("body");
body.appendChild(div);

div.classList.add("divClass")

let heading = document.createElement("h1");
heading.innerText = "Hii , I am a heading."

// div.append(heading);
div.prepend("Hii i am prepend");
// div.insertAdjacentElement("beforebegin" , heading)
// div.insertAdjacentElement("afterbegin" , heading)
// div.insertAdjacentElement("beforeend" , heading)
// div.insertAdjacentElement("afterend" , heading)
