const mathe = () => {
    let firstValue = prompt('First Value')
    let operator = prompt('Operator (  *  ,   -  ,   +  ,   /  )')
    let secondValue = prompt('Second Value')
    
    firstValue = firstValue.trim()
    secondValue = secondValue.trim()

    firstValue = Number(firstValue)
    secondValue = Number(secondValue)

    if (isNaN(firstValue) || isNaN(secondValue)) {
        alert(`Input Error, Try Again`)
    }
    else if (firstValue === "" || secondValue === "") {
        alert(`Input Error, Try Again`)
    }
    else if (operator === '+') {
        alert(`The Sum Of ${firstValue} and ${secondValue} = ${firstValue + secondValue}`)
    }
    else if (operator === '-') {
        alert(`The Subtraction Of ${firstValue} and ${secondValue} = ${firstValue - secondValue}`)
    }
    else if (operator === '*') {
        alert(`The Multiplication Of ${firstValue} and ${secondValue} = ${firstValue * secondValue}`)
    }
    else if (operator === '/') {
        alert(`The Division Of ${firstValue} and ${secondValue} = ${firstValue / secondValue}`)
    }
    else (
        alert(`Input Error, Try Again`)
    )
}   