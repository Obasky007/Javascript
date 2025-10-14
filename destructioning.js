const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTML', 'CSS', 'JS'],
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
];

let allName = []
let skillsLessThan2 = []


users.forEach(({ name, skills }) => {
    allName.push(name)

    if (skills.length < 2) {
        skillsLessThan2.push(name)
    }
})

console.log("All names:", allName)

console.log("Users with less than 2 skills:", skillsLessThan2);
