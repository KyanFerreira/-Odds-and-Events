// TODO: this file! :)
//Get all the document Variables I will need
const form = document.querySelector("form"); // Form
const sortOneButton = document.querySelector("#sortOne"); // Button for single sorting
const sortAllOneButton = document.querySelector("#sortAll"); // Button for sort all
//Create an object to hold all necessary lists
const state = {
numberBankList : [],// Number Bank
oddList : [],//Odd Category
evenList : []// Even Category
}
//EVENT LISTNERS BELOW
// Call the function to submit numbers to the number bank
form.addEventListener("submit", addNumberToNumberBank);
// Call the function to sort one number at a time
sortOneButton.addEventListener("click", sortOne);
// Call the function to sort all numbers at once
sortAllOneButton.addEventListener("click", sortAll);


function addNumberToNumberBank(e){
e.preventDefault();
const numberNeeded = form.elements.number.value;
const clearNumber = form.elements;
if(numberNeeded != ""){
    state.numberBankList.push(numberNeeded);
}

render();
//Created a way to clear single field on form
clearNumber["NumberClear"].value = "";
}

function sortOne(){
    const numberBankList = state.numberBankList;
    const firstValue = numberBankList[0];
    if(isEven(firstValue)){
        state.evenList.push(firstValue);
        numberBankList.shift();
    }else if(isOdd(firstValue)){
        state.oddList.push(firstValue);
        numberBankList.shift();
    }
    render();
}

function sortAll(){
    const numberBankList = state.numberBankList;
    for(i = 0; i < numberBankList.length; i++){
        console.log(state.numberBankList);
        const currentNumber = numberBankList[i];
        console.log(currentNumber);
        if(isEven(currentNumber)){
            state.evenList.push(currentNumber);
        }else if(isOdd(currentNumber)){
            state.oddList.push(currentNumber);
        }

    }
    state.numberBankList = [];
    render();
}



//Render all views needed
function render(){
// Render Number Bank
    let numberBankValue = "";
for(i = 0; i < state.numberBankList.length; i++){
if(i > 0 && state.numberBankList[i] != ""){
    numberBankValue += ','
}
if(state.numberBankList[i] != ""){

    numberBankValue += state.numberBankList[i];
}

}
outPutForNumberBank = document.querySelector(".numberBank");
outPutForNumberBank.innerText = numberBankValue;

// Render oddBank
let oddBankValue = "";
for(i = 0; i < state.oddList.length; i++){
    if(i > 0 && state.oddList.length != 0){
        oddBankValue += ','
    }
    oddBankValue += state.oddList[i];
}
outPutForOddNumberBank = document.querySelector(".oddNumberBank");
outPutForOddNumberBank.innerText = oddBankValue;

//Render EvenBank
let evenBankValue = "";
for(i = 0; i < state.evenList.length; i++){
    if(i > 0 && state.evenList.length != 0){
        evenBankValue += ','
    }
    evenBankValue += state.evenList[i];
}
outPutForEvenNumberBank = document.querySelector(".evenNumberBank");
outPutForEvenNumberBank.innerText = evenBankValue;

}

//Figure out if number is even
function isEven(n) {
    return n % 2 == 0;
 }
 //Figure out if number is odd
 function isOdd(n) {
    return Math.abs(n % 2) == 1;
 }
