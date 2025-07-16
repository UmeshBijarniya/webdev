const myobj = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby"
}

// to iterate objeccts forin loop is used

for (const key in myobj) {
    // console.log(key);
    // console.log(myobj[key])

    // console.log(`${key} shortcut is for ${myobj[key]}`);
}

// for in loop for arrays 
const marks = [5,3,6,3,4]
for (const key in marks) {
    // console.log(key)   // it gives the key values of arrays like 0,1,2,3
    // console.log(marks[key])
}

// we cannot iterate maps using for in loop
