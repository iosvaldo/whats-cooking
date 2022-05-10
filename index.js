
fetch('http://localhost:3000/meals')
	.then(response => response.json())
	.then(json => loadRandomMeal(json));

function loadRandomMeal(meals){
    // meals.forEach((meal) =>{
        let detailTitle = document.querySelector('#foodTitle');
        detailTitle.innerText = meals[15].strIngredient;
        // let img = document.querySelector('#image');
        // img.src = meals[0].strMealThumb;
        let detailInstructions = document.querySelector('#foodInstructions');
        detailInstructions.textContent = meals[15].strDescription;
    }