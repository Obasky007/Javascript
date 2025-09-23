// CALCULATOR
function add() {
    let firstValue = document.getElementById('first').value;
    let secondValue = document.getElementById('second').value;
    let resultElement = document.getElementById('result');
    if (firstValue === "" || secondValue === "") {
        resultElement.textContent = "Please enter a number in both fields";
        resultElement.style.color = "red";
        return;
    }
    else {
        resultElement.style.color = "green";
    }
    let num1 = Number(firstValue);
    let num2 = Number(secondValue);
    let result = num1 + num2;
    resultElement.textContent = `The sum of ${num1} and ${num2} is ${result}`;
}
function sub() {
    let firstValue = document.getElementById('first').value;
    let secondValue = document.getElementById('second').value;
    let resultElement = document.getElementById('result');
    if (firstValue === "" || secondValue === "") {
        resultElement.textContent = "Please enter a number in both fields";
        resultElement.style.color = "red";
        return;
    }
    else {
        resultElement.style.color = "yellow";
    }
    let num1 = Number(firstValue);
    let num2 = Number(secondValue);
    let result = num1 - num2;
    resultElement.textContent = `The difference of ${num1} and ${num2} is ${result}`;
}
function multiply() {
    let firstValue = document.getElementById('first').value;
    let secondValue = document.getElementById('second').value;
    let resultElement = document.getElementById('result');
    if (firstValue === "" || secondValue === "") {
        resultElement.textContent = "Please enter a number in both fields";
        resultElement.style.color = "red";
        return;
    }
    else {
        resultElement.style.color = "rgb(200, 0, 255)";
    }
    let num1 = Number(firstValue);
    let num2 = Number(secondValue);
    let result = num1 * num2;
    resultElement.textContent = `The product of ${num1} and ${num2} is ${result}`;
}
function div() {
    let firstValue = document.getElementById('first').value;
    let secondValue = document.getElementById('second').value;
    let resultElement = document.getElementById('result');
    if (firstValue === "" || secondValue === "") {
        resultElement.textContent = "Please enter a number in both fields";
        resultElement.style.color = "red";
        return;
    }
    else {
        resultElement.style.color = "blue";
    }
    let num1 = Number(firstValue);
    let num2 = Number(secondValue);
    let result = num1 / num2;
    resultElement.textContent = `The division of ${num1} and ${num2} is ${result}`;
}

// RETIREMENT CALCULATOR
function retirement() {
    let age = document.getElementById('age').value
    let retired = 60 - age
    if (age === '') {
        document.getElementById('retire').textContent = `Type In Your Age`
        document.getElementById('retire').style.color = `red`
    }
    else {
        document.getElementById('retire').style.color = `green`
        document.getElementById('retire').textContent = `You are ${age} years old, you have ${retired} more years to retire`
    }
}
