// IIFE is used to prevent pollution ffrom global scope and to immidiately execute the function when the program starts
// for ex : a file contains cinnection with dataabse

function chai(){
    console.log("DB CONNECTED")
}
chai();

// making this as iife:

(function chai(){
    console.log("DB CONNECTED 2")
})();  // this is named IIFE 
// also when we use iife then stop the function by using semicolon to execute the next iife

( () =>{
    console.log("db connnected")
} )();  //// no parameter is passed

( (name) =>{
    console.log(`db connnected ${name}`)
} )("umesh")  // when parameter is passed in function