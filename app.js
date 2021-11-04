const inputEl = document.getElementById('input');
const buttonEl = document.getElementById('button');
const outputEl = document.getElementById('output');

buttonEl.addEventListener('click', () => {
    const nameInput = inputEl.value;

    outputEl.textContent = nameInput;
    inputEl.value = '';
})

// color buttons
const pinkEl = document.getElementById('pink-button');
const greenEl = document.getElementById('green-button');
const blueEl = document.getElementById('blue-button');
const helloEl = document.getElementById('hello');
const subEl = document.getElementById('sub');

pinkEl.addEventListener('click', () => {
    helloEl.style.backgroundColor = 'pink';
    subEl.style.backgroundColor = 'pink';
    outputEl.style.borderBottom = '50px solid pink';
})

greenEl.addEventListener('click', () => {
    helloEl.style.backgroundColor = 'green';
    subEl.style.backgroundColor = 'green';
    outputEl.style.borderBottom = '50px solid green';
})

blueEl.addEventListener('click', () => {
    helloEl.style.backgroundColor = 'blue';
    subEl.style.backgroundColor = 'blue';
    outputEl.style.borderBottom = '50px solid blue';
})