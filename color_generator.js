// COLOR CODE
let myColor = "123456abcdef"
let generateBtn = document.getElementById("generateColorBtn")
let color = document.getElementById("color")
let colorHex = document.getElementById("colorHex")

const generateColor = () => {
    let colorGen = ''
    let passLength = myColor.length
    for (let b = 0; b < 6; b++) {
        let machineChar = Math.floor(Math.random() * passLength)
        colorGen += myColor[machineChar]
    }
    color.style.background = `#${colorGen}`
    colorHex.textContent = `#${colorGen}`
}

generateBtn.addEventListener('click', generateColor)

// PASSWORD CODE
let passWord = "`~1!2@3#4$5%6^7&8*9(0)-_=+qQwWrReEtTyYuUiIoOpP[{]}aAsSdDfFgGhHjJkKlL;:'\|zZxXcCvVbBnNmM,<.>/? "
let generatePassBtn = document.getElementById("generatePassBtn")
let passwordGenerated = document.getElementById("passwordGenerated")
let input = document.getElementById("input")

const generatePassword = () => {
    let passwordGen = ''
    let passLength = passWord.length
    userInput = input.value

    if (userInput !== '') {
        for (let b = 0; b < userInput; b++) {
            let machineChar = Math.floor(Math.random() * passLength)
            passwordGen += passWord[machineChar]
            passwordGenerated.textContent = passwordGen
            passwordGenerated.style.color  = '#333'
        }
    }
    if (userInput === 0) {
        passwordGenerated.textContent =  'Fill in the fields properly'
    }
    else {
        passwordGenerated.textContent =  'Fill in the fields properly'
        passwordGenerated.style.color  =  'red'
    }
}
generatePassBtn.addEventListener('click', generatePassword)