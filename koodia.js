
let typeOfOperation;
let currentFieldValue;
let nextFieldValue;

function addOne() {
    //console.log("painettu");
    document.getElementById("my_field").value += "1";
}

function addTwo() {
    document.getElementById("my_field").value += "2";
}

function addThree() {
    document.getElementById("my_field").value += "3";
}

function addFour() {
    document.getElementById("my_field").value += "4";
}

function addFive() {
    document.getElementById("my_field").value += "5";  
}

function addSix() {
    document.getElementById("my_field").value += "6";
}

function addSeven() {
    document.getElementById("my_field").value += "7";
}

function addEight() {
    document.getElementById("my_field").value += "8";
}

function addNine() {
    document.getElementById("my_field").value += "9";
}

function clearField() {
    document.getElementById("my_field").value = null;
}

function executeAddition() {
    currentFieldValue = document.getElementById("my_field").value;
    document.getElementById("my_field").value = null;
    typeOfOperation = "addition";   
}

function executeSubtraction() {
    currentFieldValue = document.getElementById("my_field").value;
    document.getElementById("my_field").value = null;
    typeOfOperation = "subtraction"; 
}

function executeMultiplication() {
    currentFieldValue = document.getElementById("my_field").value;
    document.getElementById("my_field").value = null;
    typeOfOperation = "multiplication"; 
}

function executeDivision() {
    currentFieldValue = document.getElementById("my_field").value;
    document.getElementById("my_field").value = null;
    typeOfOperation = "division"; 
}

function returnCalculatedValue() {
    if (typeOfOperation==="addition") {
        nextFieldValue = document.getElementById("my_field").value;
        let currentInt = parseInt(currentFieldValue);
        let nextInt = parseInt(nextFieldValue);
        let temporaryResult = currentInt + nextInt;    
        document.getElementById("my_field").value = temporaryResult;
    }
     else if (typeOfOperation==="subtraction") {
        nextFieldValue = document.getElementById("my_field").value;
        let currentInt = parseInt(currentFieldValue);
        let nextInt = parseInt(nextFieldValue);
        let temporaryResult = currentInt - nextInt;
        document.getElementById("my_field").value = temporaryResult;
    } 
     else if (typeOfOperation==="multiplication") {
         nextFieldValue = document.getElementById("my_field").value;
         let currentInt = parseInt(currentFieldValue);
         let nextInt = parseInt(nextFieldValue);
         let temporaryResult = currentInt*nextInt;
         document.getElementById("my_field").value = temporaryResult;
    }
    else if (typeOfOperation==="division") {
        nextFieldValue = document.getElementById("my_field").value;
        let currentInt = parseInt(currentFieldValue);
        let nextInt = parseInt(nextFieldValue);
        let temporaryResult = currentInt/nextInt;
        document.getElementById("my_field").value = temporaryResult;
    }    
}

function addZero() {
    document.getElementById("my_field").value += "0";
}