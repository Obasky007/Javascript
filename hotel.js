let first = document.getElementById("first")
let form = document.getElementById("form")
let name1 = document.getElementById("first-name")
let name2 = document.getElementById("surname")
let next = document.getElementById("nextBtn")
let firName = document.getElementById("firstname")
let secName = document.getElementById("sec-name")
let greet = document.getElementById("greet")
let roomType = document.getElementById("roomType")
let standardBtn = document.getElementById("standardBtn")
let emeraldBtn = document.getElementById("emeraldBtn")
let supremeBtn = document.getElementById("supremeBtn")
let presBtn = document.getElementById("presBtn")
let days = document.getElementById("days")
let freeBtn = document.getElementById("freeBtn")
let hotelBtn = document.getElementById("hotelBtn")
let room = document.getElementById("room")
let four = document.getElementById("four")
let value3 = document.getElementById("value3")
let calc3 = document.getElementById("calc3")
let one = document.getElementById("one")
let value = document.getElementById("value")
let calc = document.getElementById("calc")
let three = document.getElementById("three")
let value2 = document.getElementById("value2")
let calc2 = document.getElementById("calc2")
let two = document.getElementById("two")
let value1 = document.getElementById("value1")
let calc1 = document.getElementById("calc1")
let cancelBtns = document.querySelectorAll(".cancel")
let continueBtns = document.querySelectorAll(".continue")
let counter = document.getElementById("counter");
let fir = document.getElementById("fir");
let sec = document.getElementById("sec");



setTimeout(() => {
    first.style.display = 'none'
    form.style.display = 'block'
    name1.focus()
}, 700);

next.addEventListener("click", () => {
    if (name1.value.trim() !== '' && name2.value.trim() !== '') {
        greet.style.display = 'block'
        form.style.display = 'none'
        firName.textContent = name1.value.trim()
        secName.textContent = name2.value.trim()
    }
    else {
        if (name1.value.trim() === '') {
            name1.style.border = '2px solid red'
            name1.focus()
        }
        if (name2.value.trim() === '') {
            name2.style.border = '2px solid red'
            name2.focus()
        }
    }
})

freeBtn.addEventListener("click", () => {
    room.textContent = 'Thank you for selecting a Free Accommodation. Our staff will get you the available room soon, PLEASE WAIT.....'
    room.style.fontSize = '30px'
    room.style.textAlign = 'center'
    room.style.padding = '0 10px'
    room.style.color = '#ffd700'
    room.style.marginTop = '120px'
    room.style.fontWeight = 'bolder'
    setTimeout(() => {
        greet.style.display = 'none'
        roomType.style.display = 'block'
        fir.textContent = name1.value.trim()
        sec.textContent = name2.value.trim()
    }, 3000);
})
hotelBtn.addEventListener("click", () => {
    room.textContent = 'Thank you for selecting a Hotel Accommodation. Our staff will get you the available room soon, PLEASE WAIT.....'
    room.style.fontSize = '30px'
    room.style.textAlign = 'center'
    room.style.padding = '0 10px'
    room.style.color = '#ffd700'
    room.style.marginTop = '120px'
    room.style.fontWeight = 'bolder'
    setTimeout(() => {
        greet.style.display = 'none'
        roomType.style.display = 'block'
        fir.textContent = name1.value.trim()
        sec.textContent = name2.value.trim()
    }, 3000);
})

standardBtn.addEventListener("click", () => {
    const daysValue = days.value.trim();
    const daysAsNumber = Number(daysValue);

    if (daysValue === '' || isNaN(daysAsNumber)) {
        days.style.border = '4px solid red';
        days.value = '';
        days.placeholder = 'Please enter a valid number';
        days.focus();
        setTimeout(() => {
            days.style.border = '2px solid #ffd700';
            days.placeholder = 'e.g 3';
        }, 1200);
        return;
    }
    else {
        value.textContent = daysAsNumber;
        roomType.style.display = 'none'
        one.style.display = 'block'
        calc.textContent = daysAsNumber * 5000;
    }
});
emeraldBtn.addEventListener("click", () => {
    const daysValue = days.value.trim();
    const daysAsNumber = Number(daysValue);

    if (daysValue === '' || isNaN(daysAsNumber)) {
        days.style.border = '4px solid red';
        days.value = '';
        days.placeholder = 'Please enter a valid number';
        days.focus();
        setTimeout(() => {
            days.style.border = '2px solid #ffd700';
            days.placeholder = 'e.g 3';
        }, 1200);
        return;
    }
    else {
        value1.textContent = daysAsNumber;
        roomType.style.display = 'none'
        two.style.display = 'block'
        calc1.textContent = daysAsNumber * 15000;
    }
});
supremeBtn.addEventListener("click", () => {
    const daysValue = days.value.trim();
    const daysAsNumber = Number(daysValue);
    if (daysValue === '' || isNaN(daysAsNumber)) {
        days.style.border = '4px solid red';
        days.value = '';
        days.placeholder = 'Please enter a valid number';
        days.focus();
        setTimeout(() => {
            days.style.border = '2px solid #ffd700';
            days.placeholder = 'e.g 3';
        }, 1200);
        return;
    }
    else {
        value2.textContent = daysAsNumber;
        roomType.style.display = 'none'
        three.style.display = 'block'
        calc2.textContent = daysAsNumber * 25000;
    }
});
presBtn.addEventListener("click", () => {
    const daysValue = days.value.trim();
    const daysAsNumber = Number(daysValue);

    if (daysValue === '' || isNaN(daysAsNumber)) {
        days.style.border = '4px solid red';
        days.value = '';
        days.placeholder = 'Please enter a valid number';
        days.focus();
        setTimeout(() => {
            days.style.border = '2px solid #ffd700';
            days.placeholder = 'e.g 3';
        }
            , 1200);
        return;
    }
    else {
        value3.textContent = daysAsNumber;
        roomType.style.display = 'none'
        four.style.display = 'block'
        calc3.textContent = daysAsNumber * 40000;
    }
});

cancelBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        roomType.style.display = 'block'
        one.style.display = 'none'
        two.style.display = 'none'
        three.style.display = 'none'
        four.style.display = 'none'
        days.value = ''
        days.focus()
    });
});
continueBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        counter.style.display = 'block';
        one.style.display = 'none';
        two.style.display = 'none';
        three.style.display = 'none';
        four.style.display = 'none';
        const daysValue = Number(days.value.trim());
        const daysAsNumber = isNaN(daysValue) || daysValue <= 0 ? 1 : daysValue;
        let future = new Date().getTime() + (daysAsNumber * 24 * 60 * 60 * 1000);
        let timer = setInterval(() => {
            let now = new Date().getTime();
            let diff = future - now;

            if (diff <= 0) {
                clearInterval(timer);
                document.getElementById("display").textContent = "Your booking period has ended!";
                return;
            }
            let daysLeft = Math.floor(diff / (24 * 60 * 60 * 1000));
            let hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
            let mins = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
            let secs = Math.floor((diff % (60 * 1000)) / 1000);

            document.getElementById("display").textContent =
                `${daysLeft}d : ${hours}h : ${mins}m : ${secs}s`;
        }, 1000);
    });
});