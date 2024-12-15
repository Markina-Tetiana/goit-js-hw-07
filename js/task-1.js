// Знаходимо список
const listCategories = document.querySelector('#categories');
console.log(listCategories);
// Знаходимо елементи списку li.item
const listItems = listCategories.querySelectorAll('.item');
console.log(`Number of categories: ${listItems.length}`);
// Перебираємо кожен елемент і виводимо заголовок і кількість вкладених елементів
listItems.forEach(item => {
  const listTitle = item.querySelector('h2').textContent;
  const listLength = item.querySelectorAll('ul > li').length;

  console.log(`Category: ${listTitle}`);
  console.log(`Elements: ${listLength}`);
});
