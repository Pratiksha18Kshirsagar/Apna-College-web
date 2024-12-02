let url = "https://api.genderize.io?name="
let nam;
let input = document.querySelector("input")
let btn = document.querySelector("button");
let p = document.querySelector(".name");
let gen = document.querySelector(".gender");
let prob = document.querySelector(".prob");
let emo = document.querySelector(".emo");


async function predict() {
    nam = input.value;
    let res = await fetch(url + nam);
    let data = await res.json();
    console.log(typeof(data.gender));
    if (data.gender  == "female") {
        p.innerText = data.name;
        emo.innerText = "👧🏻";
        gen.innerText = data.gender.toUpperCase();
        prob.innerText =  "Probability :" + data.probability;
    }
    else if(data.gender  == "male"){
        p.innerText = data.name;
        emo.innerText = "👦🏻";
        gen.innerText =  data.gender.toUpperCase();
        prob.innerText = "Probability :" + data.probability;

    }
    else{
        p.innerText = "Not Valid";
       
    }

}

btn.addEventListener("click", async () => {
    await predict();
})