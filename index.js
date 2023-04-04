

function displayRecipe(recipe){

   let card = ''
   recipe.forEach(recipes => {


    card+=`

    <div class = 'card'>
    <h3> ${recipes.name}</h3>
    
    <img src = "${recipes.imageUrl}"  height="60%" width="60%">
    
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

