let myDate =new Date()
console.log(myDate.toString())
 
// console.log(myDate.toDateString())
// // date is of object type
// console.log(typeof(myDate))

let newDate = new Date(2023,2,34)
console.log(newDate.toDateString())

//timestamps in date

console.log(newDate.getTime())  // to gt the time in milliseconds
console.log(myDate.getTime())

// TO CHANGE THE FORMAT OF THE DATE AND TIME

myDate.toLocaleDateString(`default`,{
    weekday:"long"
})

console.log(myDate.toDateString())