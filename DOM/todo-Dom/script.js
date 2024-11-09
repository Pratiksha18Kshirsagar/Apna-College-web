let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");





btn.addEventListener("click", () => {
    if (input.value != "") {
        let li = document.createElement("li");
        
        li.innerText = input.value;

        let del = document.createElement("button");
        // del.classList.add("delete");
        del.innerText = "Delete";
        li.append(del);
        ul.append(li);


    //    this is without event delegation 
        // del.addEventListener("click", () => {
        //     li.remove();  // This will remove the corresponding list item
        // });

        input.value = "";
        input.placeholder = "Add Next Task!!"
     
    }
    else {
        alert("plz enter the task!!")
    }
    })


 /*With event Delegation ,  that uses the event bubbling concept */
 ul.addEventListener("click" , (event)=>{
         if(event.target.nodeName == "BUTTON"){
            event.target.parentElement.remove();
         }
         
 })


/*this wont work because event listner will not work for the dynamically created elements*/

//     let btns = document.querySelectorAll(".delete");
//     console.log(btns);
//    for(let btn of btns) {
//     btn.addEventListener("click" , ()=>{
//         console.log("delted")
//         let parent = btn.parentElement;
//         parent.remove();
//     })
    
//    }