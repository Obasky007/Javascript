let now = new Date()
sec = now.getSeconds()
mins = now.getMinutes()
now = now.getHours()


if (now >= 1 && now < 12) {
    console.log('Good Morning')
    console.log(`The Time Is ${now}:${mins}:${sec}`)
}
else if (now >= 12 && now <= 16) {
    console.log("Good Afternoon")
    console.log(`The Time Is ${now}:${mins}:${sec}`)
}
else if (now >= 17 && now <= 24) {
    console.log('Good Evening')
    console.log(`The Time Is ${now}:${mins}:${sec}`)
}
