// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

// Iteration 1: set the visibility of `<section class="mushroom">`
function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

// Iteration 1.2: set the visibility of `<section class="green-pepper">`
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((pepper) => {
    if (state.greenPeppers) {
      pepper.style.visibility = 'visible';
    } else {
      pepper.style.visibility = 'hidden';
    }
  });
}

// Iteration 2.1: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
  if (state.whiteSauce === false) {
    document.querySelector('section.sauce').classList.remove('sauce-white');
  } else {
    document.querySelector('section.sauce').classList.add('sauce-white');
  }
}

// Iteration 2.2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust === false) {
    document
      .querySelector('section.crust')
      .classList.remove('crust-gluten-free');
  } else {
    document.querySelector('section.crust').classList.add('crust-gluten-free');
  }
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach((button) => {
    const ingredient = button.dataset.ingredient;
    if (state[ingredient] === true) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

// Iteration 4: change the HTML of `<aside class="panel price">`
function renderPrice() {
  let totalPrice = basePrice;
  const ingredientsArray = Object.entries(ingredients);

  let priceIngredientLi = '';
  ingredientsArray.forEach((ingredient) => {
    if (state[ingredient[0]] === true) {
      priceIngredientLi += `
        <li>$ ${ingredient[1].price} ${ingredient[1].name}</li>
      `;
      totalPrice += ingredient[1].price;
    }
    console.log(ingredient[1]);
  });
  const pricePanelHTML = `
    <h2>Your Pizza's price</h2>
    <b>$${basePrice} cheese pizza</b>
    <ul>
      ${priceIngredientLi}
    </ul>
    <strong>$ ${totalPrice}</strong>
  `;

  document.querySelector('.panel.price').innerHTML = pricePanelHTML;
}

renderEverything();

// Iteration 0: Add click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1.1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1.2: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });
// Iteration 2.1: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2.2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
