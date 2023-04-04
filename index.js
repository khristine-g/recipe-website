

function displayRecipe(recipe){

   let card = ''
   recipe.forEach(recipes => {


    card+=`

    <div class = 'card'>
    
    <img src = "${recipes.imageUrl}">
    <p>  ${recipes.description}</p>
    <p> ${ recipes.ingredients}</p>
    <p> ${recipes.method}</p>
    </div>
    
    
    
    `
   });
   document.querySelector ("#recipe-info").innerHTML = card
}


    
 function fetchRecipes()   {
     fetch('http://localhost:3000/recipes')
    .then(res => res.json())
    .then(recipes => displayRecipe(recipes))

        
    }

    fetchRecipes();

