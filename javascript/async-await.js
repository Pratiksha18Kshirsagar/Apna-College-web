let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        let random = Math.floor(Math.random() * 5) + 1;
        setTimeout(() => {
            if (random > 3) {
                reject("promise got rejected!!")
            }

            h1.style.color = color;
            console.log("color changed to", color);
            resolve("color was changed");
        }, delay);
    })

}


async function demo() {
    try {
        await changeColor("violet", 1000);
        await changeColor("blue", 1000);
        await changeColor("indigo", 1000);
        await changeColor("green", 1000);
        await changeColor("yellow", 1000);
        await changeColor("orange", 1000);
        await changeColor("red", 1000);
    } catch (err) {
        console.log(err);
        console.log("error caught");
    }


    let num = 5;
    console.log(num)
    console.log("new num", num + 3);
}
demo();

// changeColor("red" , 1000).then(()=>{
//     console.log("red is completed");
//     return changeColor("yellow" , 1000);
// }).then(()=>{
//     console.log("yellow is completed");
//     return changeColor("green" , 1000);
// }).then(()=>{
//     console.log("green is completed");
//     return changeColor("hotpink" , 1000);
// })
