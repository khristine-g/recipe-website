# recipe-website

This recipe website contains several functions that work together to fetch recipe data from a local server and display it on the page. The main function, displayRecipes, takes an array of recipe objects and generates HTML code to display them on the page. It also sets up event listeners for each recipe card, allowing the user to click on them to view more details about the recipe.

The website also includes event listeners for filtering the recipes by category. When the user clicks on a category, the fetchRecipes function is called with the appropriate filter parameter. This function fetches the data from the server and then calls displayRecipes to update the page with the filtered results.


The website also includes an event listener for submitting a form to add a new recipe. When the user submits the form, the addRecipe function is called to handle the form data and send it to the server for processing.


