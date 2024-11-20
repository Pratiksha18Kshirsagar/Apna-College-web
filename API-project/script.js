let url = "http://universities.hipolabs.com/search?name="
let input = document.querySelector("input");
let country ;


let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    country = input.value;
    console.log(country)
    let data = await getColleges();
    console.log(data);
})





async function getColleges() {

    let res = await axios.get(url + country);
    console.log(res.data);
    return res.data;
}

