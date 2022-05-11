
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
        // let mealId = meals.idMeal;
        // www.themealdb.com/api/json/v1/1/lookup.php?i=`${mealId}`
        
        // const ingredientList = document.querySelector('#ingredient-list');
        
//         const ingredientItem1 = document.createElement('li');
//         const ingredientItem2 = document.createElement('li');
//         const ingredientItem3 = document.createElement('li');
//         const ingredientItem4 = document.createElement('li');
//         const ingredientItem5 = document.createElement('li');
//         const ingredientItem6 = document.createElement('li');

//         ingredientItem1.innerText = meals.strIngredient1;
//         ingredientItem2.innerText = meals.strIngredient2;
//         ingredientItem3.innerText = meals.strIngredient3;
//         ingredientItem4.innerText = meals.strIngredient4;
//         ingredientItem5.innerText = meals.strIngredient5;
//         ingredientItem6.innerText = meals.strIngredient6;
//         ingredientList.append(ingredientItem1, ingredientItem2, ingredientItem3, ingredientItem4, ingredientItem5, ingredientItem6);
//     }
// }



// function renderIngredients(data){
//     let ingredients = data.meals.slice(9, 20);
//     ingredientItem = document.createElement('li');
//     const ul = document.querySelector('#ingredient-list');



//     ul.appendChild(ingredient);
// }
        
        
        // const ingredient1 = 
        // const ingredientImg = document.createElement('img');
        // const ul = document.querySelector('#ingredient-list');
        // let i = 1;
        // while((`meals.strIngredient${i}.innerHTML` !== "") && (i < 21)){
        //         let ingredientNum = `meals.strIngredient${i}.textContent`;
        //         console.log(ingredientNum);
        //         ingredientImg.src = `www.themealdb.com/images/ingredients/${ingredientNum}.png`;
        //         ul.append(ingredientImg);
        //         i++;
        //         // ingredient.src = `www.themealdb.com/images/ingredients/${ingredient}.png`;
        //         // let ingredientImg = ingredient.src
        //         // ul.append(ingredientImg);
        // }
    


