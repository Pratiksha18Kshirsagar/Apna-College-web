// let h1 = document.querySelector("h1");

// function changeColor(color,delay,nextColorChange){
//    setTimeout(() => {
//     h1.style.color = color;
//     if(nextColorChange){
//         nextColorChange();
//     }
//    }, delay);
// }

// changeColor("red" , 1000 , ()=>{
//     changeColor("hotpink" , 1000 , ()=>{
//         changeColor("yellow" , 1000 ,()=>{
//              changeColor("purple" , 1000 , ()=>{
//                 changeColor("green" , 1000 , ()=>{
//                     changeColor("aqua" , 1000 , ()=>{
//                         changeColor("brown" , 1000 ,()=>{
//                             changeColor("cadetblue" , 1000 , ()=>{
//                                 changeColor("plum" , 1000)
//                             })
//                         })
//                     })
//                 })
//              })
//         })
//     })
// })


let h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
          resolve("color was changed");
           }, delay);
    })
  
}

changeColor("red" , 1000).then(()=>{
    console.log("red is completed");
    return changeColor("yellow" , 1000);
}).then(()=>{
    console.log("yellow is completed");
    return changeColor("green" , 1000);
}).then(()=>{
    console.log("green is completed");
    return changeColor("hotpink" , 1000);
})




// function savetoDb(data , success, failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         success();
//     }
//     else{
//         failure();
//     }
// }

// savetoDb("pratiksha" , ()=>{
//     console.log("pratiksha saved!!");
//     savetoDb("data2" , ()=>{
//         console.log("data2 saved");
//     }, ()=>{
//         console.log("data2 not saved!!")
//     })
// } , ()=>{
//     console.log("pratiksha not  saved!!");
// })


