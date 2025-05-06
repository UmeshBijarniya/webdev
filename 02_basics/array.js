const myarr = [2,3,6,4,325,4]
// console.log(myarr)

const myarr1 = new Array(7,6,5,4)
// console.log(myarr1[3])

// Array Methods 

// myarr.push(44)
// console.log(myarr)
// myarr.pop()

// console.log(myarr)
// const newarr = myarr.join()
// console.log(newarr)

// Slice and Splice

// console.log("A",myarr)
// const myn1 = myarr.slice(1,3)  //does not make changes in original array
// console.log("B",myn1)

// console.log(myarr)

// const myn2 = myarr.splice(1,3)  .. remove elements from original array and can also add new elements from original array
// console.log("C",myn2)
// console.log(myarr)

// // concarenating 2 arrays
// const arr=[1,2,3,4]
// const arr1=[5,6,7,8]
// console.log(arr)
// //make new array to use concat
// const arr2=arr.concat(arr1)
// console.log(arr2)

// //another method is to use spread

// const arr3=[...arr,...arr1]
// console.log(arr3)

console.log(Array.isArray("umesh"))
console.log(Array.from("umesh"))
console.log(Array.from({name:"umesh"}))  // this cannot convert this object in array so this gives empty array

