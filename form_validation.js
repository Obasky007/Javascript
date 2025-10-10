const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const nameRegex = /^[a-zA-Z0-9]{3,16}$/;
// const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[\d]).{7,}$/;
const minRegex = /^.{7,}$/;
const letterRegex = /[a-zA-Z]/;
const numRegex = /[\d!@#$%^&*]/;

const form = document.getElementById("registerForm");
const formEmail = document.getElementById("email");
const formUsername = document.getElementById("Username");
const formPassword = document.getElementById("Password");

const emailDoc = document.getElementById("emailDoc");
const userDoc = document.getElementById("userDoc");
const passDoc = document.getElementById("passDoc");

const min = document.getElementById("min");
const num = document.getElementById("num");
const letter = document.getElementById("letter");


formEmail.addEventListener("submit", () => {
    const email = formEmail.value.trim();
    if (emailRegex.test(email)) {
        emailDoc.textContent = "✔ Valid email";
        emailDoc.style.color = "green";
    } else {
        emailDoc.textContent = "Invalid email address";
        emailDoc.style.color = "red";
    }
});

formUsername.addEventListener("submit", () => {
    const username = formUsername.value.trim();
    if (nameRegex.test(username)) {
        userDoc.textContent = "✔ Username looks good";
        userDoc.style.color = "green";
    } else {
        userDoc.textContent = "3-16 chars only (letters or numbers)";
        userDoc.style.color = "red";
    }
});

formPassword.addEventListener("input", () => {
    const password = formPassword.value;
    if (minRegex.test(password)) {
        min.style.color = "green";
    } else {
        min.style.color = "red";
    }
    if (numRegex.test(password)) {
        num.style.color = "green";
    } else {
        num.style.color = "red";
    }
    if (letterRegex.test(password)) {
        letter.style.color = "green";
    } else {
        letter.style.color = "red";
    }
});

form.addEventListener("submit", (i) => {
    i.preventDefault();

    const email = formEmail.value.trim();
    const username = formUsername.value.trim();
    const password = formPassword.value.trim();

    if (!emailRegex.test(email)) {
        emailDoc.textContent = "Invalid email address!";
        emailDoc.style.color = "red";
    }
    
    if (!nameRegex.test(username)) {
        userDoc.textContent = "Invalid username!";
        userDoc.style.color = "red";
    }
    
    if (email === '') {
        emailDoc.textContent = "Required!";
        emailDoc.style.color = "red";
    }
    if (password === '') {
        passDoc.textContent = "Required!";
        passDoc.style.color = "red";
    }
    if (username === '') {
        userDoc.textContent = "Required!";
        userDoc.style.color = "red";
    }
});
