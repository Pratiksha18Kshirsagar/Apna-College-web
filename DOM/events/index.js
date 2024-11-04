let button = document.querySelectorAll("button");
console.log(button);
for (let btn of button) {
    btn.addEventListener("click" , ()=>{
        console.log("Double click is clicked!!");
    });
}