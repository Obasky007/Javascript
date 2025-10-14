const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const nameRegex = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{5,}$/; // ✅ has at least 1 upper, 1 lower
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{7,}$/;
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

form.addEventListener("submit", (i) => {
    i.preventDefault();

    const email = formEmail.value.trim();
    const username = formUsername.value.trim();
    const password = formPassword.value.trim();

    let check = true;
    emailDoc.textContent = "";
    userDoc.textContent = "";
    passDoc.textContent = "";

    if (!emailRegex.test(email)) {
        emailDoc.textContent = "Invalid email address!";
        emailDoc.style.color = "red";
        check = false;
    }

    if (!nameRegex.test(username)) {
        userDoc.textContent = "Must have at least 1 Capital, 1 Small and a minimum of 5 characters";
        userDoc.style.color = "red";
        check = false;
    }

    if (email === "") {
        emailDoc.textContent = "Required!";
        emailDoc.style.color = "red";
        check = false;
    }
    if (password === "") {
        passDoc.textContent = "Required!";
        passDoc.style.color = "red";
        check = false;
    }
    if (username === "") {
        userDoc.textContent = "Required!";
        userDoc.style.color = "red";
        check = false;
    }
    if (check) {
        form.submit();
    }
});

formPassword.addEventListener("input", () => { const password = formPassword.value; if (minRegex.test(password)) { min.style.color = "green"; } else { min.style.color = "red"; } if (numRegex.test(password)) { num.style.color = "green"; } else { num.style.color = "red"; } if (letterRegex.test(password)) { letter.style.color = "green"; } else { letter.style.color = "red"; } });
