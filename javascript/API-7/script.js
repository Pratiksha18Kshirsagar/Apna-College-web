let url = "https://www.themealdb.com/api/json/v1/1/search.php?s="


let input = document.querySelector("input");
let userInput;

let searchBtn = document.querySelector(".search");
let main = document.querySelector(".main");


// let view = document.querySelector(".Recipe");

async function SearchRecipe() {
    try {
        userInput = input.value;
    let res = await fetch(url + userInput);
    let data = await res.json();
    console.log(data.meals);
    let meals = data.meals;
    for (const meal of meals) {
        let card = document.createElement("div");
        card.classList.add("card");
        main.append(card);
        card.innerHTML = ` <img class = "img" src=${meal.strMealThumb} alt="">
            <p class = "title" >${meal.strMeal}</p >
                <button class = "Recipe">View Recipe</button>`
    }
    } catch (error) {
        main.innerHTML = `<h1 class = "h">"Oops!! No Recipe Found 🤦‍♀️"</h1>`
    }
}

searchBtn.addEventListener("click", () => {
    main.innerHTML = "";
    SearchRecipe();
})
