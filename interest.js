const message = document.getElementById('result')
const interest = 0.15

const calculator = () => {
    const amount = Number(document.getElementById('amount').value)
    const month = Number(document.getElementById('month').value)
    const interestAmount = amount * interest
    if (isNaN(amount) || amount === '' || isNaN(month)) {
        message.textContent = 'FILL IN THE FIELDS PROPERLY'
        message.style.color = 'red'
    }
    else if (month === 1) {
        const total = amount + interestAmount
        message.textContent = `YOU ARE TO RETURN $${total} IN ${month} MONTH TIME`
        message.style.color = '#333'
    }
    else if (month === 2) {
        const total = amount + (interestAmount * month)
        newTotal = total / month
        message.style.color = '#333'
        message.textContent = `YOU ARE TO RETURN $${total} IN ${month} MONTHS TIME AND $${newTotal} EVERY MONTH`
    }
    else if (month === 3) {
        const total = amount + (interestAmount * month)
        newTotal = total / month
        message.style.color = '#333'
        message.textContent = `YOU ARE TO RETURN $${total} IN ${month} MONTHS TIME AND $${newTotal} EVERY MONTH`
    }
    else if (month === 4) {
        const total = amount + (interestAmount * month)
        newTotal = total / month
        message.style.color = '#333'
        message.textContent = `YOU ARE TO RETURN $${total} IN ${month} MONTHS TIME AND $${newTotal} EVERY MONTH`
    }
}