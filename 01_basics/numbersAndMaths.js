// const score = 100;
// console.log(score);
// let balance = new Number(200);  // another way to declare a number

// console.log(balance);

// console.log(balance.toString().length); // used to change the number to string ye yahi pe string me change hua h permanently change nhi hua
//  // .length is used to get the length of the string

// console.log(typeof(balance))  // object 
// console.log(typeof(balance.toString())) // changed to string temporarily

// console.log(balance.toFixed(2));  // it fixes the number of digits after decimal value


// const num = 123.876
// console.log(num.toPrecision(3)) // used to round of the number to precise value

//* * * * * * MATHS * * * * * * * 

console.log(Math);  // math is a object
 
console.log(Math.abs(-4)) //gives +ve value

console.log(Math.min(4,5,6,3,2,5)) // gives min value

console.log(Math.random()) // gives random values b/w 0-1

console.log(Math.floor(Math.random()*10 + 1))

// now to get the value from a particular number to a particular number

const min =1
const max=6

console.log(Math.floor((Math.random()*(max-min+1)) + min))