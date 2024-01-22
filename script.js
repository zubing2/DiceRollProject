var numRolls = 0;
var numDice = 0;
let totalVal = 0;
let mean = 0;
let median = 0;
let mode = 0;
let doubles = 0, triples = 0;
let rolledNums = [];
let freqOne = 0;
let freqTwo = 0;
let freqThree = 0;
let freqFour = 0;
let freqFive = 0;
let freqSix = 0;
let freqSeven = 0;
let freqEight = 0;
let freqNine = 0;
let freqTen = 0;
let freqEleven = 0;
let freqTwelve = 0;
let freqThirteen = 0;
let freqFourteen = 0;
let freqFifteen = 0;
let freqSixteen = 0;
let freqSeventeen = 0;
let freqEighteen = 0;

let form = document.getElementById('form_info')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    numRolls = form.elements['rolls'].value;
    numDice = form.elements['dices'].value;
    rollDice();
    reset();
})
console.log(numRolls);

let roll = document.getElementById("rolls");
roll.addEventListener("click", rollDice);


function rollDice(){
    for (let i = 0; i < numRolls; i++) {
        let totalRolls = 0;
        for (let i = 0; i < numDice; i++) {
            let number = Math.floor(((Math.random() * 6) + 1))
            totalRolls += number;
        }
        totalVal += totalRolls;
        rolledNums.push(totalRolls);
      }
      rolledNums.sort();
      console.log(totalVal);
      calculateMean();
      calculateMedian();
      console.log(rolledNums.sort());
      updateFrequencies();
      reset();
};

function updateFrequencies() {
    for (let i = 0; i < rolledNums.length; i++) {
        if (rolledNums[i] == 1) {
            freqOne ++;
        }
        if (rolledNums[i] == 2) {
            freqTwo ++;
        }
        if (rolledNums[i] == 3) {
            freqThree ++;
        }
        if (rolledNums[i] == 4) {
            freqFour ++;
        }
        if (rolledNums[i] == 5) {
            freqFive ++;
        }
        if (rolledNums[i] == 6) {
            freqSix ++;
        }
        if (rolledNums[i] == 7) {
            freqSeven ++;
        }
        if (rolledNums[i] == 8) {
            freqEight ++;
        }
        if (rolledNums[i] == 9) {
            freqNine ++;
        }
        if (rolledNums[i] == 10) {
            freqTen ++;
        }
        if (rolledNums[i] == 11) {
            freqEleven ++;
        }
        if (rolledNums[i] == 12) {
            freqTwelve ++;
        }
        if (rolledNums[i] == 13) {
            freqThirteen ++;
        }
        if (rolledNums[i] == 14) {
            freqFourteen ++;
        }
        if (rolledNums[i] == 15) {
            freqFifteen ++;
        }
        if (rolledNums[i] == 16) {
            freqSixteen ++;
        }
        if (rolledNums[i] == 17) {
            freqSeventeen ++;
        }
        if (rolledNums[i] == 18) {
            freqEighteen ++;
        }
        document.getElementById("freq-1").innerHTML = freqOne;
        document.getElementById("freq-2").innerHTML = freqTwo;
        document.getElementById("freq-3").innerHTML = freqThree;
        document.getElementById("freq-4").innerHTML = freqFour;
        document.getElementById("freq-5").innerHTML = freqFive;
        document.getElementById("freq-6").innerHTML = freqSix;
        document.getElementById("freq-7").innerHTML = freqSeven;
        document.getElementById("freq-8").innerHTML = freqEight;
        document.getElementById("freq-9").innerHTML = freqNine;
        document.getElementById("freq-10").innerHTML = freqTen;
        document.getElementById("freq-11").innerHTML = freqEleven;
        document.getElementById("freq-12").innerHTML = freqTwelve;
        document.getElementById("freq-13").innerHTML = freqThirteen;
        document.getElementById("freq-14").innerHTML = freqFourteen;
        document.getElementById("freq-15").innerHTML = freqFifteen;
        document.getElementById("freq-16").innerHTML = freqSixteen;
        document.getElementById("freq-17").innerHTML = freqSeventeen;
        document.getElementById("freq-18").innerHTML = freqEighteen;
    }
}
function calculateMean() {
    mean = (totalVal/numRolls).toFixed(2);
    document.getElementById("mean").innerHTML = mean;
}
function calculateMedian() {
    rolledNums.sort()
    if(rolledNums.length != 1 && rolledNums.length  % 2 != 0){
    median = rolledNums[rolledNums.length / 2 + 1];
    }
    else if(rolledNums.length % 2 == 0 && rolledNums.length != 1){
        median = Math.round((rolledNums[rolledNums.length / 2] + rolledNums[rolledNums.length / 2 -1]) / 2)
    }
    else{
        median = rolledNums[0];
    }
    document.getElementById("median").innerHTML = median;
}

function calculateMode() {
    var empty = []
    i = 0
    max = 0
    while (i<numRolls.length){
       if (numRolls[i]==numRolls[i+1]){
           empty = numRolls[i] 
       i += 1
        }else{
          i +=1
          }
     }
    document.getElementById("mode").innerHTML = empty;
}

function reset(){
    totalVal = 0;
    rolledNums = [];
    freqOne = 0;
    freqTwo = 0;
    freqThree = 0;
    freqFour = 0;
    freqFive = 0;
    freqSix = 0;
    freqSeven = 0;
    freqEight = 0;
    freqNine = 0;
    freqTen = 0;
    freqEleven = 0;
    freqTwelve = 0;
    freqThirteen = 0;
    freqFourteen = 0;
    freqFifteen = 0;
    freqSixteen = 0;
    freqSeventeen = 0;
    freqEighteen = 0;
}
