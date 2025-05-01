const name = "umesh"
const repocount = 50

// console.log(name+repocount)  // this syntax is not a good practise

console.log(`Hello my names is ${name} and my age is ${repocount}`)

const nickname = new String('umeshdon')  // another method to declare string

console.log(nickname)
console.log(nickname[2]) //acts like an array but is not array in actual

console.log(nickname.__proto__)  // accessing objects

console.log(nickname.toUpperCase()) //changes the name to uppercase letters

const newname = nickname.substring(0 ,4) // this cits the string from 0 to 4
console.log(newname)

const newstring = "  bijarniya    "
console.log(newstring)
console.log(newstring.trim())  // this removes the extra unwanted spaces in the string

const url = "https:/umesh.com/bijarniya%20don"
console.log(url.replace('%20' , '_'))
//this replaces %20 with '_'
//.include is used to check whether particular thing is present in string or not
console.log(url.includes('umesh'))
