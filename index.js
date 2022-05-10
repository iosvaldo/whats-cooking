
fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(response => response.json())
    // .then(data => console.log(data));
    .then(data => loadRandomMeal(data));

function loadRandomMeal(data){
    for(meals of data.meals){
        let mealTitle = document.querySelector('#random-meal-title');
        mealTitle.textContent = meals.strMeal;
        let mealImage = document.querySelector('#meal-image');
        mealImage.src = meals.strMealThumb;
        let mealDescription = document.querySelector('#random-meal-description');
        mealDescription.textContent = meals.strDescription;
}}

let recipeForm = document.getElementById("recipe-form");
let recipeDescription = document.getElementById("description");
let newRecipes = document.getElementById("new-recipes");

recipeForm.addEventListener("submit",function(e){
    e.preventDefault();
    let newReview = document.createElement("li");
    newReview.innerText = description.value
    newRecipes.append(newReview)
    e.target.reset()
    console.log("submit")
})
