var numRolls = 0;
var numDice = 0;
let totalVal = 0;
let mean = 0;
let median = 0;
let mode = 0;

let form = document.getElementById('form_info')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    numRolls = form.elements['roll_count'].value;
    numDice = form.elements['dice_count'].value;
})
console.log(numRolls);