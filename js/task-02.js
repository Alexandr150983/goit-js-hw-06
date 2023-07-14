const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const fragment = document.createDocumentFragment();

ingredients.forEach(ingredient => {
  const liEl = document.createElement('li');

  liEl.textContent = ingredient;
  liEl.classList.add("item");
  fragment.appendChild(liEl);
  
});
list.appendChild(fragment);

