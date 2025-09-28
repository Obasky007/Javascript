// COUNTRIES
const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']
if (countries.includes("Ethiopia")) {
    console.log('ETHIOPIA');
}

// WEBTECHS
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']


// SHOPPING CART
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart);
console.log(shoppingCart.unshift('Meat'));
console.log(shoppingCart);
console.log(shoppingCart.push('Sugar'));
console.log(shoppingCart);
console.log(shoppingCart.indexOf("Honey"));
console.log(shoppingCart.splice(4, 1));

console.log(shoppingCart.with(3, 'Green Tea'));