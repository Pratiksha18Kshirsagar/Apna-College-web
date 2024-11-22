let url = "https://api.genderize.io/?name=";
let input = document.querySelector("input");
let btn = document.querySelector("button");


async function gender(name) {
    let gen = await axios.get(url + name);
    return gen.data.gender;
}



btn.addEventListener("click", async () => {
    let userName = input.value;
    await gender(userName);
})