// Question:
// 1. Iterate through the users array, extract the names of all the object using "Destructuring" and store them in a new array
// 2. Find the persons who have less than two skills, and store them in a new array



const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTMl', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTML', 'CSS', 'JS', 'REACT'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTML', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTML', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTML', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Matthew',
        scores: 60,
        skills: [],
        age: 22
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTML', 'CSS', 'DART', 'KOTLIN'],
        age: 20
    },
    {
        name: 'Promise',
        scores: 90,
        skills: ['HTML', 'CSS', 'JS', 'FLUTTER'],
        age: 20
    }
]

allName = []
skills = []

users.map(({name}) => {
    console.log(name)
    allName.push(name)
})
console.log("all names:", allName);
