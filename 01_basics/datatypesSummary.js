//primitive

//7 typse : string, number, boolean, null,undefined, symbol,BigInt

const score = false
const scoreValue = 100.4

const isLoggedIn = false
const outside = null


const id=Symbol('123')
const anotherId= Symbol('123')

// console.log(id === anotherId)
// console.log(typeof id)
// console.log(typeof anotherId)


//reference (non primitive)

// array,objects, functions

const hero = ["umesh", "akash","pandey"]
console.log(hero)

let muObj = {
    name:"umesh",
    age : 22,
}

const myfunction = function(){
    console.log("Hello World");
}

myfunction()