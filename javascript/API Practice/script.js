let url = "https://api.freeapi.app/api/v1/public/cats/cat/random"
let btn = document.querySelector("button");

let p = document.querySelector("p");

async function catName() {
    let cat = await axios.get(url);
    return cat.data.data.name;
}



btn.addEventListener("click", async () => {
    p.innerText =  await catName();
})
