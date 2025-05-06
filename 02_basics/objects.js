//singleton
//object.create  --> iss se object declare karne pe singleton banega

//object literals
const mysym = Symbol("key1")

const jsUser = {
    name: "umesh",
    "f name": "umesh Bijarniya",  //this type of declaration creates problem in acessing through "." opreator

    age: 20,
    // mysym: "myKey1",  not correct syntax to declare symbol
    [mysym]: "mykey1",
    Email: "umesh@gmail.com",
}
//how to access

console.log(jsUser.name)
// console.log(jsUser["age"])
// console.log(jsUser.mysym)
// console.log(typeof jsUser.mysym)
// console.log(jsUser)

//function in js
jsUser.greeting = function () {
    console.log(`hello everyone,${this["f name"]}`);
    // ${}  is used to reference the same object
}

//To access 

console.log(jsUser.greeting())