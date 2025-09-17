let age = prompt("How Old Are You ?")
let yearsLeft = 18 - age

age = age.trim()

age = Number(age)

switch (true) {
    case isNaN(age) || age <= 0:
        alert("Didn't Get Your Age, Please Reload")
        break;

    case age >= 1 && age <= 17:
        alert(`You Are Not Eligible To Drive, You Have ${yearsLeft} Years Left To Drive,`)
        break;
        
    default:
        alert(`You Are ${age} Years Old, You Are Eligible To Drive`)
        break;
}   
