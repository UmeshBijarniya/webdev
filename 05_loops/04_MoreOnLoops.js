const coding = ["js","ruby","java","c++"]

// trrying to store in a variable
 const values = coding.forEach( (item)=>{
    // console.log(item)

    // for each does not return any values
    //return item
} )

console.log(values);   


// using filter 

const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = mynums.filter( (num)=>(num > 4))

// to use {} insteadd of () use return keyword and {} returns object 
// example

// const newnums = mynums.filter( (num)=>{
// return num>4   // here we can apply any conditions we want according to our requirements
// } )

// filter returns a value that is stored in newnums variable

// console.log(newnums)

// using for each at place of filter

const newnums = []
mynums.forEach( (num)=>{
    if(num>4){
        // console.log(num);
        newnums.push(num);
    }
})

console.log(newnums)
