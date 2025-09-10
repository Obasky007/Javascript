let Time = new Date()

let sec = Time.getSeconds()

let mins = Time.getMinutes()

let time = Time.getHours()

let myName = prompt('What Is Your Name ?')

myName = myName.trim()


if (time >= 1 && time < 12 && myName !== '') {
    alert(`Good Morning ${myName}`)
    alert(`The Time Is ${time}:${mins}:${sec}`)
}

else if (time >= 12 && time <= 16 && myName !== '') {
    alert(`Good Afternoon ${myName}`)
    alert(`The Time Is ${time}:${mins}:${sec}`)
}

else if (time >= 17 && time <= 24 && myName !== '') {
    alert(`Good Evening ${myName}`)
    alert(`The Time Is ${time}:${mins}:${sec}`)
}

else { 
    alert('Did Not Get Your Name, Please Reload')
}

