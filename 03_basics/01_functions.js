
function addTwoNOs(number1,number2){
    console.log(number1 + number2);
}

addTwoNOs(4,"a")
addTwoNOs("3",null)

//return type function
function Add(num1,num2){ 
    return num1+num2
}
// const res = Add(4,7)
// console.log(res)

function loginMessage(username){
    return `${username} just logged in`
}

let name = loginMessage("umesh bijarniya")
//if we donot pass  any value in this function then it gives undefined
// console.log(name)

function calcPrice(bvar1,...num1){
    return num1
}  // thiss function returns all ther entered numbers in a array form

console.log(calcPrice(100,200,300))  // first value ko bvar1 leke jayega

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}

// passing values(object) in function of input type object

handleObject({
    username:"sam",
    price:4565
})

