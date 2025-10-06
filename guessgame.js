let myNum = Math.floor(Math.random() * 16) + 10;
console.log(`number: ${myNum}`);

const cta1 = document.getElementById("cta1");
const cta2 = document.getElementById("cta2");
const attemptshtml = document.getElementById("attempts");
const input = document.getElementById("input");
let attempts = 6;

const guessBtn = () => {
    let result = document.getElementById("result");
    const answer = Number(input.value);

    if (input.value === "" || isNaN(answer)) {
        result.textContent = "Please enter a valid number";
        result.style.color = "orange";
        input.value = "";
        input.focus();
        return;
    }

    if (answer < 10 || answer > 25) {
        result.textContent = "Number must be between 10 and 25";
        result.style.color = "gray";
        input.value = "";
        input.focus();
        return;
    }

    attempts--;

    if (answer === myNum) {
        result.textContent = `You guessed it right! The number was ${myNum}.`;
        result.style.color = "green";
        attemptshtml.textContent = "";
        input.disabled = true;
        input.style.cursor = 'not-allowed'
        cta1.style.display = "none";
        cta2.style.display = "inline-block";
        return;
    }

    if (attempts > 0) {
        if (answer < myNum) {
            result.textContent = `Too low! ${attempts} attempts left.`;
        } else {
            result.textContent = `Too high! ${attempts} attempts left.`;
        }
        result.style.color = "#a1524d";
        attemptshtml.textContent = attempts;
        input.value = "";
        input.focus();
    } else {
        result.textContent = `Game Over! The number was ${myNum}`;
        result.style.color = "red";
        attemptshtml.textContent = "";
        input.disabled = true;
        cta1.style.display = "none";
        cta2.style.display = "inline-block";
    }
};

const reset = () => {
    myNum = Math.floor(Math.random() * 16) + 10;
    console.log(`New number: ${myNum}`);

    input.value = "";
    input.disabled = false;
    input.focus();

    let result = document.getElementById("result");
    result.textContent = "";

    attempts = 6;
    attemptshtml.textContent = attempts;

    cta2.style.display = "none";
    cta1.style.display = "inline-block";
};
