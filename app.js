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

// pronoun selection
const pronounEl = document.getElementById('pronoun-input')
// const checkValue = element.options[element.selectedIndex].value;
const checkText = element.options[element.selectedIndex].text;

pronounEl.addEventListener('change',(e) => {
    const value = e.target.value;
    const text = element.options[element.selectedIndex].text;

    if (value) {
        document.getElementById('pronoun-output').textContent = `Value Selected: ${value}`;
    } else {
      document.getElementById("pick").textContent = "";
    }
  });


// const maleEl = document.getElementById('male')
// const femaleEl = document.getElementById('female')
// const theyEl = document.getElementById('they')
// const otherEl = document.getElementById('other')

// maleEl.addEventListener('click', () => {
//     const pronoun = maleEl.value;

//     outputEl.textContent = pronoun;

// })