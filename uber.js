let text1 = document.getElementById("first");
let text2 = document.getElementById("second");
let body = document.getElementById("body");
let form = document.getElementById("card");
let bookBtn = document.getElementById("bookBtn");
let container = document.getElementById("container");

setTimeout(() => {
  text1.style.display = 'none';
  text2.style.display = 'block';
  body.style.background = 'white';
}, 1000);

setTimeout(() => {
  text2.style.display = 'none';
  form.style.display = 'block';
}, 3000);

bookBtn.addEventListener("click", () => {
  let fromInput = document.getElementById("fromInput");
  let toInput = document.getElementById("toInput");
  fromInput.focus();

  if (fromInput.value.trim() !== '' && toInput.value.trim() !== '') {
    form.style.display = 'none';

    container.innerHTML = `
      <div id="card-2">
        <p>
          You are requesting a ride from 
          <span id='value'>${fromInput.value.trim()}</span> 
          to 
          <span id='value'>${toInput.value.trim()}</span>.
        </p>
        <p>Please confirm your ride</p>
        <div class="btn">
          <button id="cancelBtn">Cancel</button>
          <button id="startBtn">Start</button>
        </div>
      </div>
    `;

    let cancelBtn = document.getElementById("cancelBtn");
    let startBtn = document.getElementById("startBtn");
    cancelBtn.addEventListener("click", () => {
      fromInput.value = '';
      toInput.value = '';
      container.style.display = 'none';
      form.style.display = 'block';
      fromInput.focus();
    });
    startBtn.addEventListener("click", () => {
      container.innerHTML = `
        <div id="card-3">
          <p id='clock'>00:00:00</p>
          <p>You are moving from ${fromInput.value.trim()} to ${toInput.value.trim()}</p>
          <p>Your ride is in progress...</p>
          <p style="display:none;" id='text'>Your ride has been paused, do you wish to continue</p>
          <div class="btn">
            <button id="pause">Pause</button>
            <button id="endBtn">End Ride</button>
          </div>
        </div>
      `;

      let stop = document.getElementById("pause");
      let endBtn = document.getElementById("endBtn");
      let getStopWatch = document.getElementById("clock");
      let pauseText = document.getElementById("text").textContent;
      let startSecs = 0;
      let startCounting;
      const stopWatch = () => {
        startSecs++;
        let hours = Math.floor(startSecs / 3600);
        let mins = Math.floor((startSecs % 3600) / 60);
        let secs = startSecs % 60;

        secs < 10 ? secs = `0${secs}` : secs = secs
        mins < 10 ? mins = `0${mins}` : mins = mins
        hours < 10 ? hours = `0${hours}` : hours = hours

        getStopWatch.textContent = `${hours}:${mins}:${secs}`;
        endBtn.addEventListener("click", () => {
          clearInterval(startCounting);
          let getStopTime = getStopWatch.textContent;

          container.innerHTML = `
            <div id="card-4">
              <div id="overlay"></div>
              <div id="content">
                <p id="title-2">Ride has ended</p>
                <span class="fa fa-check-circle"></span>
                <div id="receipt">
                  <p id="title-2">Receipt</p>
                  <table>
                    <tr><td>Base Fare</td><td id='bFare'></td></tr>
                    <tr><td>Total Time</td><td id="totalTime"></td></tr>
                    <tr><td>Time Fare</td><td id='time'></td></tr>
                    <tr><td>Tax (10%)</td><td id='tax'></td></tr>
                    <tr><td>Total Amount</td><td id='total'></td></tr>
                  </table>
                  <button id="payment">Make Payment</button>
                </div>
              </div>
            </div>
          `;
          document.getElementById("totalTime").textContent = getStopTime;
          let bFare = document.getElementById("bFare");
          let time = document.getElementById("time");
          let tax = document.getElementById("tax");
          let total = document.getElementById("total");
          let pay = document.getElementById("payment")
          bFare = bFare.textContent = '$50.00';
          time = time.textContent = `$${Math.floor(mins * 50)}`;
          tax = tax.textContent = `${5}%`
          total.textContent = `$${50 + Math.floor(mins * 5) + 5}`;
          pay.addEventListener("click", () => {
            alert('Payment Successful! Thank you for riding with us.');
          });
        });
      };

      const countFunc = () => {
        startCounting = setInterval(stopWatch, 1000);
      };
      stop.addEventListener("click", () => {
        text.style.display = 'block';
        if (stop.textContent === 'Pause') {
          clearInterval(startCounting);
          stop.textContent = 'Continue';
        } else {
          text.style.display = 'none';
          countFunc();
          stop.textContent = 'Pause';
        }
      });
      countFunc();
    });

  } else {
    if (fromInput.value.trim() === '') {
      fromInput.style.border = '2px solid red';
    }
    if (toInput.value.trim() === '') {
      toInput.style.border = '2px solid red';
    }
    fromInput.focus();
  }
});
