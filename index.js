const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownToggle = document.querySelector('.dropdown-toggle');
dropdownToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});


// const allCategories = document.querySelector('#all-categories');
const veganFood = document.querySelector('#vegan');
const vegetarianFood= document.querySelector('#vegeterian');
const ketoFood= document.querySelector('#keto');
const paleoFood= document.querySelector('#paleo');

allCategories.addEventListener('click', () => {
  fetchRecipes(recipes);
});

vegan.addEventListener('click', () => {
    fetchRecipes('vegan');
  });
  
  vegetarian.addEventListener('click', () => {
    fetchRecipes('vegetarian');
  });
  
  keto.addEventListener('click', () => {
    fetchRecipes('keto');
  });
  
  paleo.addEventListener('click', () => {
    fetchRecipes('paleo');
  });

 



const displayRecipes = (recipes) => {
    let card = '';
    recipes.forEach((recipe, index) => {
      card += `

      
        <div class="card" style="width:25rem;  transform: scale(1); transition: all 2s;">
          <img class="card-img-top" src="${recipe.imageUrl}" alt="Card image cap"> 
          <div class="card-body">
            <h5 class="card-title">${recipe.name}</h5>
            <p class="card-text">${recipe.description}</p>
            <div>
            <h6 class="rating" style="color:red;">Star Rating</h6>
            <span class="fa fa-star checked" style = "color:orange;"></span>
            <span class="fa fa-star checked" style = "color:orange;></span>
            <span class="fa fa-star checked" style = "color:orange;></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>    
            </div>
            <a href="#" class="btn btn-primary recipe-btn" id="recipe-btn-${index}">See recipe</a> 
            
          </div>
         
        </div>
        
      `;

      
  
    });

  
    document.querySelector('#recipe-info').innerHTML = `
      <div class="card-grid">
        ${card}
      </div>
    `;


const cardList = document.querySelectorAll('.card');

cardList.forEach((card) => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'translateY(-10px)';
  });

  card.addEventListener('mouseout', () => {
    card.style.transform = 'translateY(0px)';
  });
});
    
    // add event listener to recipe buttons
    const recipeBtns = document.querySelectorAll('.recipe-btn');
    recipeBtns.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        const index = (event.target.id.split('-')[2]);
        moreInfo(index);
      });
    });
     // add event listeners to recipe cards
//  const cards = document.querySelectorAll('.card');
//   cards.forEach((card) => {
//      card.addEventListener('mouseover', () => {
//      card.style.filter = 'blur(5px)';
//     });
//    card.addEventListener('mouseout', () => {
//       card.style.filter = 'none';
//     });
//   });
 };
  
  
  const moreInfo = (index) => {
    fetch('http://localhost:3000/recipes')
      .then(res => res.json())
      .then(recipes => {
        const recipe = recipes[index];
        const info = `
        <div >
          <div class= "divDetails">
          <h2 class="recipeName" "> ${recipe.name}</h2>
          <img class="card-img-top" src="${recipe.imageUrl}" alt="Card image cap"  style= "width:60%;height:400px; max-width: 100%;; " ;> 
           </div>
            <h3 class="heading" style="text-align:center;"> ${recipe.heading}</h3>
            
            <p class" ingredients" style= "text-align:center; font-size:20px;">${recipe.ingredients.join('<br>')}</p>
            <h3 class= "steps" style="text-align:center; "> ${recipe.steps}</h3>
            <p class="method" style="text-align:center; font-size:20px;">${recipe.method}</p>
            <button class="btn btn-primary back-btn" style=" position: fixed; top: 20px;right: 20px;">Back to recipes</button>
          </div>
        `;
        document.querySelector('#recipe-info').innerHTML = info;
        const backBtn = document.querySelector('.back-btn');
        backBtn.addEventListener('click', () => {
          displayRecipes(recipes);
        });
      });
  };


  const fetchRecipes = (filter = '') => {
    let url = 'http://localhost:3000/recipes';
    
    if (filter !== '') {
      url += `?type=${filter}`;
    }
  
    fetch(url)
      .then(res => res.json())
      .then(recipes => displayRecipes(recipes));
  };

  window.addEventListener('load', () => {
    fetchRecipes();
  });

  // Add event listener to the form submit event
// const form = document.querySelector("#add-recipe-form");
// form.addEventListener("submit", addRecipe);

// Event handler function for the form submit event
function addRecipe(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the form data as an object
  const formData = new FormData(event.target);
  const recipe = {};
  formData.forEach((value, key) => recipe[key] = value);

}



const recipeForm = document.querySelector('#add-recipe-form');

recipeForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value;
  const description = document.querySelector('#description').value;
  const imageUrl = document.querySelector('#imageUrl').value;
  const diet = document.querySelector('#diet').value;

  const data = { name, description, imageUrl, diet };

  fetch(' http://localhost:3000/recipes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      // Reset the form
      form.reset();
      // Fetch the updated recipes and display them
      fetchRecipes();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});

fetch('http://localhost:3000/recipes/2', {
    method: 'DELETE'
  }).then(response => {
    if (response.ok) {
      console.log('Recipe deleted successfully');
    } else {
      console.error('Failed to delete recipe');
    }
  }).catch(error => {
    console.error('Failed to delete recipe:', error);
  });
  

