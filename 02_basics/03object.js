// const tinderuser = new Object()   //singleton object

//non singleton object
const tinderuser = {}
tinderuser.name="umesh"
tinderuser.age="30"
tinderuser.id="123abc"

// console.log(tinderuser)

const regUser = {
    email: 'umesh@gmail.com',
    //nesting
    userfullname: {
        userlastname: {
            firstname:"umesh",
            lastname: "bijarniya",
        }
    }
}

console.log(regUser.userfullname.userlastname.firstname)

// combining objects
const obj1={ 1:"a",2:"b"}
const obj2={ 3:"c",4:"d"}

// const obj3={obj1,obj2}
const obj3=Object.assign(obj1,obj2)

const obj4={...obj1,...obj2}

console.log(obj3)
console.log(obj4)

console.log(Object.keys(obj3))  //  this gives the keys present in object

// simillarly we can also check "values" in object
// we cam also check ""entries"" in object --> combination of keys and values in array form
  
