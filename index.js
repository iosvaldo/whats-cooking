
fetch("https://www.themealdb.com/api/json/v1/1/random.php")
// fetch("https://www.themealdb.com/api/json/v2/9973533/random.php")
    .then(response => response.json())
    // .then(data => console.log(data));
    .then(data => loadRandomMeal(data));

    

function loadRandomMeal(data){
    for(meals of data.meals){
        let mealTitle = document.querySelector('#random-meal-title');
        mealTitle.textContent = meals.strMeal;
        let mealImage = document.querySelector('#meal-image');
        mealImage.src = meals.strMealThumb;
        let mealInstructions = document.querySelector('#random-meal-instructions');
        mealInstructions.textContent = meals.strInstructions;
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
    //like button
     let likeBtn = document.createElement("button");
    //  let likeText = document.createElement("p")
    //  likeText.innerText = "Likes"
    //  newReview.append(likeBtn)
    
        newReview.append(likeBtn)
        likeBtn.innerText = 0;
        likeBtn.addEventListener("click",incrementBtn)
})
    function incrementBtn(e) {
    let num = parseInt(e.target.innerText)
    let num2 = num + 1;
    e.target.innerText = num2;
}
 
        
        
       


