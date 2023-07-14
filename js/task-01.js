const categoriesList = document.getElementById('categories');
const items = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    const titleItem = item.querySelector('h2').textContent;
    const elItem = item.querySelectorAll('li').length;

    console.log(`Category: ${titleItem}`)
    console.log(`Elements: ${elItem}`);
});


