let myNum = Math.floor(Math.random() * 16) + 10;
console.log(`number: ${myNum}`);

const cta1 = document.getElementById("cta1");
const cta2 = document.getElementById("cta2");
const attemptshtml = document.getElementById("attempts");
let attempts = 6;

const guessBtn = () => {
    const input = document.getElementById("input").value;
    const answer = Number(input);
    let result = document.getElementById("result");
    
    if (input === "" || isNaN(answer)) {
        result.textContent = "Input a valid number";
        result.style.color = "orange";
    }
    else if (answer < 10 || answer > 25) {
        result.textContent = "Number is between 10 and 25";
        result.style.color = "gray"
    }
    else if (answer === myNum) {
        result.textContent = `You guessed it right in ${attempts} attempts! The number was ${myNum}.`;
        result.style.color = "green";
        cta1.style.display = 'none';
        cta2.style.display = 'inline-block';
    }
    else if (attempts > 0) {
        attempts--;
        attemptshtml.textContent = attempts;
        result.textContent = "Wrong guess, try again!";
        result.style.color = "red";
    }
    else {
        result.textContent = `Game Over! The number was ${myNum}`;
        result.style.color = "red";
        cta1.style.display = "none";
        cta2.style.display = "inline-block";
    }
}

const reset = () => {
    myNum = Math.floor(Math.random() * 16) + 10;
    console.log(`New number: ${myNum}`);

    const input = document.getElementById("input");
    input.value = "";

    let result = document.getElementById("result");
    result.textContent = "";

    attempts = 6;
    attemptshtml.textContent = attempts;

    cta2.style.display = "none";
    cta1.style.display = "inline-block";
};
