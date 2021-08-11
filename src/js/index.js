const CLASS_DISPLAY = 'display';
const CLASS_HIDE = 'hide';

function filterCards(category) {

  const cards = document.querySelectorAll('.menu__card');

  if (category === 'all') {

    for (let card of cards) {

      card.classList.remove('hide');
      card.classList.add('display');

    }
    return;

  }

  for (let card of cards) {
    
    if (card.dataset.category === category) {
      card.classList.remove('hide');
      card.classList.add('display');
    } else {
      card.classList.remove('display');
      card.classList.add('hide');
    }

  }
}

const categoriesSelect = [
  { 
    category: 'all',
    button: document.getElementById('category-all')
  },
  {
    category: 'breakfast',
    button: document.getElementById('category-breakfast')
  },
  {
    category: 'lunch',
    button: document.getElementById('category-lunch')
  },
  {
    category: 'shakes',
    button: document.getElementById('category-shakes')
  },
  {
    category: 'dinner',
    button: document.getElementById('category-dinner')
  }
];

for (let select of categoriesSelect) {

  select.button.addEventListener('click', () => filterCards(select.category));

}