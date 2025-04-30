const accId = 96100
let accEmail = "umesh@gmail.com"
var accPass = "4321"
accCity = "jaipur"

// accId=1234567 // channging const is not allowed

accEmail = "bijarniya@gmail.com"  // let can be changed
/*
prefer not to use var becoz of issue in block scope and functional scope
*/

console.log(accId);
console.table([accId,accEmail,accPass,accCity])


