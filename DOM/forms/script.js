// let form = document.querySelector("form");
// form.addEventListener("submit" , (e)=>{
//     e.preventDefault();
//     let input = document.querySelector("input");
//     console.log(input.value);
//     console.log(this.elements[0].value);
// })


let input = document.querySelector("input");
let h2 = document.querySelector("h2");

input.addEventListener("input" , ()=>{
    if(input.value >= "a" && input.value <= "z"  || input.value >= "A" && input.value <= "Z" || input.value == " "){
    h2.innerText = input.value;}
})