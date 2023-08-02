// Event bubbling and capturing in JavaScript
const parentElement = document.getElementById('parent');
const childElement = document.getElementById('child');

parentElement.addEventListener('click', () => {
  console.log('Parent clicked.');
}, false);

childElement.addEventListener('click', () => {
  console.log('Child clicked.');
}, true);
