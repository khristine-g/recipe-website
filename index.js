

function displayRecipe(recipe){

   let card = ''
   recipe.forEach(recipes => {


    card+=`

    <div class = 'card'>
    <h3> ${recipes.name}</h3>
    
    <img  src = "${recipes.imageUrl}"  height="400px" width="400px">
    
   //  <p>  ${recipes.description}</p>
   //  <p> ${recipes.heading}</p>
   //  <p> ${ recipes.ingredients}</p>
   //  <p> ${recipes.method}</p>
    </div>
    
    
    
    `
   });
   document.querySelector ("#recipe-info").innerHTML = card
}

document.getElementById("my-image").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("my-image").innerHTML = `
  
  
  <p>  ${recipes.description}</p>
    <p> ${recipes.heading}</p>
    <p> ${ recipes.ingredients}</p>
    <p> ${recipes.method}</p>
  
  
  `
}

    
 function fetchRecipes()   {
     fetch('http://localhost:3000/recipes')
    .then(res => res.json())
    .then(recipes => displayRecipe(recipes))

        
    }

    fetchRecipes();

