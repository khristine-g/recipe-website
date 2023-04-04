

function recipeData(recipe){

    let card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
    <img src ="${recipe.name}">
    <div class = "content">
    <p>  "${recipe.description}"</p>
    
    `

    document.querySelector('#recipe-info').appendChild(card)

}

fetch('http://localhost:3000/recipes')
    .then(response => response.json())
    .then(data => data.forEach(recipe =>recipeData));