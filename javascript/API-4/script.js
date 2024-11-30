let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let str;

let btn = document.querySelector("button");
let input = document.querySelector("input");
let p = document.querySelector(".mean");
let word  = document.querySelector(".word");

async function define(){
    str = input.value;
    let res = await axios.get(url + str);
    console.log(res.data[0].meanings[0].definitions[0].definition)
    word.innerText = `${res.data[0].word}:`
    p.innerText = res.data[0].meanings[0].definitions[0].definition
    input.value = "";
}

btn.addEventListener("click" , async()=>{
    await define();

})