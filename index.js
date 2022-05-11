
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
        let mealInstructions = document.querySelector('#random-meal-instructions');
        mealInstructions.textContent = meals.strInstructions;

        const ulIngredients = document.querySelector('#ingredient-list');

        // let asArray = Object.keys(meals);
        let newArray = Object.values(meals);
        console.log(newArray);
        // const substring = "strIngredient";
        const slicedArray = newArray.slice(9, 17);
        // let ingredientsArray = [];

        slicedArray.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            ulIngredients.appendChild(listItem);
            const btn = document.createElement('button')
            btn.textContent = " X "
            listItem.append(btn)
            btn.addEventListener('click', deleteItem)
        });
        // const ingredientItems = newArray.filter((item) => item.includes(substring));
        // // const ingredientItems2 = array2.filter((item) => item.includes(substring));
        // const slicedIngredients = ingredientItems.slice(0, 5);
        // // const slicedIngredients2 = ingredientItems2.slice(0, 5);
        // console.log(slicedIngredients);
        // console.log(slicedIngredients2);
    }}

    function deleteItem(e){
        e.target.parentNode.remove()
    }


    
        // for(const item of slicedIngredients){
        //     console.log(newItem);
            // const listItem = document.createElement('li');
            // listItem.textContent = meals.newItem;
            // ulIngredients.appendChild(listItem);
    
    // const ingredients = asArray.filter(meal => {
    //     meal.includes('strIngredient');
    // });
    // console.log(ingredients);


        // let ingredients = meals.text.includes('strIngredient');
        //     for(ingredient in ingredients){
        //         item.innerText = mealIngredients.item;
        //         ingredientList.append(item);
    


        // let mealId = meals.idMeal;
        // www.themealdb.com/api/json/v1/1/lookup.php?i=`${mealId}`
        
//         const ingredientList = document.querySelector('#ingredient-list');
        
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



