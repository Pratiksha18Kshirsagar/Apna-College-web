let input = document.querySelector("input");
let btns = document.querySelectorAll(".box");
console.log(btns);
let eqbtn = document.querySelector(".res");
let clr = document.querySelector(".clr");

for (const btn of btns) {
    btn.addEventListener("click" , ()=>{
        input.value =  input.value + btn.innerText;
    })
}

eqbtn.addEventListener("click" , ()=>{
   if(input.value){
    let result = eval(input.value);
    input.value = result;
   }
   else{
    input.placeholder = "Invalid!!"
   }
  
})

clr.addEventListener("click" , ()=>{
    input.value = "";
})