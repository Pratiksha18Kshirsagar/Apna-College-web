let url = "https://api.freeapi.app/api/v1/public/cats/cat/random"
let btn = document.querySelector("button");


async function catName() {
    let res = await axios.get(url);
    console.log(res.data);
  

}

catName();

btn.addEventListener("click", async () => {
    
})

