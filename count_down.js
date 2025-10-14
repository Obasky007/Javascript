let display = document.getElementById("number");
let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");
let btn = document.querySelector("btn")
let number = 60;

countdownFunc = () => {
  countdown = setInterval(() => {
    number--
    display.textContent = number
    startBtn.style.display = 'none'
    pauseBtn.style.display = 'inline-block'
    resetBtn.style.display = 'inline-block'
    if (number <= 0) {
      display.textContent = 'Time Up'
      display.style.background = "#e47070"
      clearInterval(countdown)
    }
    else if (number < 10) {
      display.textContent = `0${number}`
    }
    pauseBtn.addEventListener('click', () => {
      pauseBtn.style.display = 'none'
      startBtn.textContent = 'Continue'
      startBtn.style.display = 'inline-block'
      resetBtn.style.display = 'inline-block'
      clearInterval(countdown)
    })
  }, 1000);
}

startBtn.addEventListener("click", () => {
  countdownFunc()
  btn.style.marginLeft = '200px'
})

resetBtn.addEventListener('click', () => {
  number = 61
  number--
  display.textContent = number
  startBtn.style.display = 'inline-block'
  clearInterval(countdown);
  resetBtn.style.display = 'none'
  pauseBtn.style.display = 'none'
  display.style.background = 'chocolate'
})