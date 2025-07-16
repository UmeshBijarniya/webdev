const mynumes = [1,2,3,4,5,6,7,8,9,10]

const newnum = mynumes.map( (num) =>{ return num + 10 })

// we can also apply maps and other operations more than one time as:-
const  newno = mynumes
               .map((num)=>num*10 )  // all the numbers are changed 
               .map((num) =>  num+1)  //  this takes all the changed numbers
               .filter((num)=> num>40)  // filters from all the new changed values

// console.log(newnum)
console.log(newno)