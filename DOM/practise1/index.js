let para = document.createElement("p");
para.innerText = "Hi i m Red!!";
para.classList.add("red");

let body = document.querySelector("body");
body.append(para);

let heading3 = document.createElement("h3");
heading3.innerText = "Hii , I am blue h3!!"
heading3.classList.add("blue");
body.append(heading3);

let btn = document.createElement("button");
btn.innerText = "click Me";
body.append(btn);
btn.setAttribute("id" , "btn");

let input = document.createElement("input");
body.append(input);
// input.placeholder = "user name";
input.setAttribute("placeholder" , "username");

document.querySelector("#btn").classList.add("but");
